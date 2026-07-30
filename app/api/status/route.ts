import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 400 });
  }

  const quote = await prisma.quoteRequest.findUnique({
    where: { token },
    select: { status: true },
  });

  return NextResponse.json({ status: quote?.status || "not_found" });
}