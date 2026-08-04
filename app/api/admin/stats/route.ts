import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [totalLeads, qualifiedLeads, totalQuotes, pendingQuotes, recentLeads, recentQuotes] =
      await Promise.all([
        prisma.lead.count(),
        prisma.lead.count({ where: { status: "qualified" } }),
        prisma.quoteRequest.count(),
        prisma.quoteRequest.count({ where: { status: "pending" } }),
        prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
        prisma.quoteRequest.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
      ]);

    return NextResponse.json({
      totalLeads,
      qualifiedLeads,
      totalQuotes,
      pendingQuotes,
      recentLeads,
      recentQuotes,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}