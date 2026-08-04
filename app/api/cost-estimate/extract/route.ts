import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const VALID_PROJECT_TYPES = [
  "landing-page",
  "business-website",
  "e-commerce",
  "web-application",
  "custom-software",
];

const VALID_FEATURES = [
  "payment-gateway",
  "admin-panel",
  "user-auth",
  "product-catalog",
  "blog-cms",
  "api-integration",
  "multi-language",
  "seo-setup",
  "chat-support",
  "mobile-app",
];

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const prompt = `A client described a web project they want. Extract structured requirements from their message.

Valid projectType values (pick exactly one, the closest match): ${VALID_PROJECT_TYPES.join(", ")}
Valid feature ids (pick zero or more that apply): ${VALID_FEATURES.join(", ")}

Return ONLY a raw JSON object, no markdown, no explanation, in this exact shape:
{
  "projectType": one of the valid project types above,
  "features": array of matching feature ids from the list above (empty array if none mentioned),
  "timeline": "urgent" if the client mentioned a rush/tight deadline, otherwise "standard"
}

Client message:
"${message}"

Return ONLY the JSON object.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
      config: {
        maxOutputTokens: 300,
        temperature: 0.1,
      },
    });

    const rawText = response.text ?? "{}";
    const cleanJson = rawText.replace(/```json|```/g, "").trim();

    let extracted;
    try {
      extracted = JSON.parse(cleanJson);
    } catch (parseErr) {
      console.error("Failed to parse cost-estimate JSON:", rawText);
      return NextResponse.json(
        { error: "Could not understand project requirements" },
        { status: 422 }
      );
    }

    // Validate projectType, fallback if invalid
    if (!VALID_PROJECT_TYPES.includes(extracted.projectType)) {
      extracted.projectType = "business-website";
    }

    // Validate features array
    if (!Array.isArray(extracted.features)) {
      extracted.features = [];
    } else {
      extracted.features = extracted.features.filter((f: string) =>
        VALID_FEATURES.includes(f)
      );
    }

    // Validate timeline
    if (extracted.timeline !== "urgent") {
      extracted.timeline = "standard";
    }

    return NextResponse.json(extracted);
  } catch (error) {
    console.error("Cost estimate extraction error:", error);
    return NextResponse.json(
      { error: "Failed to extract project requirements" },
      { status: 500 }
    );
  }
}