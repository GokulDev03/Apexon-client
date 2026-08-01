// app/api/leads/qualify/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check if a lead with this email already exists
    const existingLead = await prisma.lead.findFirst({
      where: { email: body.email },
    });

    let lead;

    if (existingLead) {
      // Update existing lead with latest info (keep highest score)
      lead = await prisma.lead.update({
        where: { id: existingLead.id },
        data: {
          name: body.name ?? existingLead.name,
          phone: body.phone ?? existingLead.phone,
          company: body.company ?? existingLead.company,
          industry: body.industry ?? existingLead.industry,
          budget: body.budget ?? existingLead.budget,
          timeline: body.timeline ?? existingLead.timeline,
          projectType: body.projectType ?? existingLead.projectType,
          score: Math.max(body.score ?? 0, existingLead.score),
          status: body.status ?? existingLead.status,
          reasoning: body.reasoning ?? existingLead.reasoning,
        },
      });
    } else {
      // Create new lead
      lead = await prisma.lead.create({
        data: {
          name: body.name,
          email: body.email,
          phone: body.phone ?? null,
          company: body.company ?? null,
          industry: body.industry ?? null,
          budget: body.budget ?? null,
          timeline: body.timeline ?? null,
          projectType: body.projectType ?? null,
          score: body.score ?? 0,
          status: body.status ?? 'new',
          reasoning: body.reasoning ?? null,
          source: 'chatbot',
        },
      });
    }

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}