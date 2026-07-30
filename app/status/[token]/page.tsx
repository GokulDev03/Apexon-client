import { prisma } from "@/lib/prisma";

export default async function StatusPage({
  params,
}: {
  params: { token: string };
}) {
  const quote = await prisma.quoteRequest.findUnique({
    where: { token: params.token },
  });

  if (!quote) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Invalid or expired link</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {quote.status === "approved" && (
        <>
          <h2>✅ Your request has been approved!</h2>
          <p>Thank you, {quote.name}. We'll be in touch soon.</p>
        </>
      )}

      {quote.status === "rejected" && (
        <>
          <h2>❌ Your request was not approved.</h2>
          <p>We're sorry, {quote.name}.</p>
        </>
      )}

      {quote.status === "pending" && (
        <>
          <h2>⏳ Still under review</h2>
          <p>Hang tight, {quote.name}. We'll update you soon.</p>
        </>
      )}
    </div>
  );
}