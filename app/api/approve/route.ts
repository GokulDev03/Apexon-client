import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Invalid link", { status: 400 });
  }

  const quote = await prisma.quoteRequest.findUnique({
    where: { token },
  });

  if (!quote) {
    return new Response("Invalid or expired link", { status: 404 });
  }

  if (quote.status !== "pending") {
    return new Response(
      simpleHtml("locked", quote.name, `This request was already marked as "${quote.status}".`),
      { headers: { "Content-Type": "text/html" } }
    );
  }

  await prisma.quoteRequest.update({
    where: { token },
    data: { status: "approved" },
  });

  return new Response(simpleHtml("approved", quote.name), {
    headers: { "Content-Type": "text/html" },
  });
}

function simpleHtml(type: "approved" | "rejected" | "locked", name: string, extra?: string) {
  const config = {
    approved: {
      icon: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#d4a574" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: "Request Approved",
      title: `You're in, ${name} 🎉`,
      message: `You've approved this consultation request. They'll be notified and moved to the next step.`,
      color: "#0d3320",
      accent: "#d4a574",
    },
    rejected: {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="#fca5a5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: "Request Rejected",
      title: `Request declined`,
      message: `You've rejected the consultation request from <b>${name}</b>. No further action needed.`,
      color: "#7f1d1d",
      accent: "#fca5a5",
    },
    locked: {
      icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 0 0 3.55 21H20.45A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: "Already Processed",
      title: `Already handled`,
      message: extra || `This request has already been processed.`,
      color: "#78350f",
      accent: "#fbbf24",
    },
  }[type];

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${config.label}</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f5ead9;
          font-family: -apple-system, 'Segoe UI', Arial, sans-serif;
        }
        header {
          background: #0d3320;
          padding: 18px 32px;
          display: flex;
          align-items: center;
        }
        .logo {
          color: #f5ead9;
          font-size: 20px;
          font-weight: 700;
        }
        .logo span {
          color: #d4a574;
        }
        main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .wrap {
          max-width: 460px;
          width: 100%;
          text-align: center;
          animation: fadeUp 0.6s ease-out;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .icon-box {
          position: relative;
          width: 96px;
          height: 96px;
          margin: 0 auto 32px;
        }
        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: ${config.color};
          opacity: 0.12;
          animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.15; }
          75%, 100% { transform: scale(1.7); opacity: 0; }
        }
        .icon-circle {
          position: relative;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: ${config.color};
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px ${config.color}40;
        }
        .label {
          color: ${config.accent};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        h1 {
          color: ${config.color};
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 14px;
          line-height: 1.25;
        }
        p {
          color: #0d332099;
          font-size: 15px;
          line-height: 1.6;
          max-width: 360px;
          margin: 0 auto;
        }
        .btn {
          display: inline-block;
          margin-top: 32px;
          background: #0d3320;
          color: #f5ead9;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 30px;
          border-radius: 999px;
          transition: opacity 0.2s;
        }
        .btn:hover {
          opacity: 0.85;
        }
      </style>
    </head>
    <body>
      <header>
        <div class="logo">Apex<span>on</span></div>
      </header>
      <main>
        <div class="wrap">
          <div class="icon-box">
            <div class="ring"></div>
            <div class="icon-circle">${config.icon}</div>
          </div>
          <p class="label">${config.label}</p>
          <h1>${config.title}</h1>
          <p>${config.message}</p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || ""}/" class="btn">Go to Homepage</a>
        </div>
      </main>
    </body>
  </html>
  `;
}