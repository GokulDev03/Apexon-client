// app/api/leads/reasoning/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { chatData, score, status } = await req.json();

    const prompt = `Based on this lead data: ${JSON.stringify(chatData)}, 
score: ${score}, status: ${status}. 
Give a short 1-2 sentence reasoning explaining why this lead got this score.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 150,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const reasoning = data.content?.[0]?.text ?? 'No reasoning available.';

    return NextResponse.json({ reasoning });
  } catch (error) {
    console.error('Error generating reasoning:', error);
    return NextResponse.json({ reasoning: '' }, { status: 500 });
  }
}