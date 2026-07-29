import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const token = searchParams.get("token");

  if (!token) {
    return new Response("Invalid token");
  }

  await prisma.quoteRequest.update({
    where: {
      token,
    },
    data: {
      status: "approved",
    },
  });

  redirect("/thank-you");
}