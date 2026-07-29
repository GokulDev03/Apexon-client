import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/rejected", req.url)
    );
  }

  await prisma.quoteRequest.update({
    where: {
      token,
    },
    data: {
      status: "rejected",
    },
  });

  return NextResponse.redirect(
    new URL("/rejected", req.url)
  );
}