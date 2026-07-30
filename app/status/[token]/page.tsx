import { prisma } from "@/lib/prisma";

export default async function StatusPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const quote = await prisma.quoteRequest.findUnique({
    where: { token },
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
          <p>Thank you, {quote.name}. We&apos;ll be in touch soon.</p>
        </>
      )}

      {quote.status === "rejected" && (
        <>
          <h2>❌ Your request was not approved.</h2>
          <p>We&apos;re sorry, {quote.name}.</p>
        </>
      )}

      {quote.status === "pending" && (
        <>
          <h2>⏳ Still under review</h2>
          <p>Hang tight, {quote.name}. We&apos;ll update you soon.</p>
        </>
      )}
    </div>
  );
}