import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { conversation } = await req.json();

    const conversationText = conversation
      .map((m: any) => `${m.role}: ${m.content}`)
      .join('\n');

    const prompt = `Extract lead information from this chat conversation.
Return ONLY a raw JSON object (no markdown, no code fences, no explanation) with these exact fields:
{
  "name": string or null,
  "email": string or null,
  "phone": string or null,
  "company": string or null,
  "industry": string or null,
  "budget": string or null,
  "timeline": string or null,
  "projectType": string or null,
  "respondedQuickly": boolean,
  "providedContactInfo": boolean,
  "askedDetailedQuestions": boolean
}

Conversation:
${conversationText}

Return ONLY the JSON object, nothing else.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
      config: {
        maxOutputTokens: 400,
        temperature: 0.2,
      },
    });

    const rawText = response.text ?? '{}';
    const cleanJson = rawText.replace(/```json|```/g, '').trim();

    let extracted;
    try {
      extracted = JSON.parse(cleanJson);
    } catch (parseErr) {
      console.error('Failed to parse Gemini JSON:', rawText);
      extracted = {};
    }

    return NextResponse.json(extracted);
  } catch (error) {
    console.error('Extraction error:', error);
    return NextResponse.json({}, { status: 500 });
  }
}