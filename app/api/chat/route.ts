import { GoogleGenAI } from "@google/genai";
import { calculateEstimate } from "@/components/cost-estimator/services/costEstimatorService";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const SYSTEM_PROMPT = `
You are Apexon AI, the official AI assistant of Apexon Tech.

Company Services:
- Website Development
- Web Applications
- E-Commerce Development
- SEO Optimization
- UI/UX Design
- Landing Pages
- Website Maintenance
- API Integration

Technologies:
React.js, Next.js, Node.js, Express.js,
MongoDB, MySQL, PostgreSQL,
Tailwind CSS, TypeScript.

Rules:
- Be professional and friendly.
- Answer website development questions clearly.
- If someone asks about Apexon services, explain them.
- If pricing is asked and no estimate context is provided below, say it depends on requirements and recommend contacting Apexon Tech.
- If an ESTIMATE CONTEXT section is provided below, use that estimated price range naturally in your answer instead of deflecting.
- If the question is unrelated to web development or Apexon services, politely say you specialize in those topics.

Formatting rules (very important):
- Write in plain, natural, conversational text — like a chat message, not a document.
- Do NOT use markdown formatting: no **bold**, no headers, no asterisks, no bullet-point lists.
- If you need to list things, write them in a flowing sentence separated by commas, not as a bulleted list.
- Keep responses short and to the point — 2 to 4 sentences, unless the user specifically asks for more detail.
- Sound like a real person chatting, not like a formal report or brochure.

Service URLs:

Website Development
https://apexon-client.vercel.app/services/website-development

Web Application Development
https://apexon-client.vercel.app/services/web-application-development

Custom Software Development
https://apexon-client.vercel.app/services/custom-software-development

SEO Services
https://apexon-client.vercel.app/services/seo-services

UI/UX Design
https://apexon-client.vercel.app/services/ui-ux-design

Business Automation
https://apexon-client.vercel.app/services/business-automation

API Development
https://apexon-client.vercel.app/services/api-development

Website Maintenance
https://apexon-client.vercel.app/services/website-maintenance

Booking
https://apexon-client.vercel.app/contact

Pricing
https://apexon-frontend.vercel.app/services

Additional Instructions:

- If the user's question is about one of the services above, answer naturally first and then append ONLY the matching service URL at the end.
- If the user asks about pricing, packages, quotation, or cost, append ONLY:
https://apexon-frontend.vercel.app/services
- If the user asks about booking, consultation, contact details, phone number, email, or office location, append ONLY:
https://apexon-client.vercel.app/contact
- Never append more than one URL unless the user explicitly asks for multiple services.
- Never invent URLs.
- If the question is unrelated to Apexon Tech or its services, answer normally without appending any URL.
`;

const COST_KEYWORDS = [
  "cost", "price", "pricing", "budget", "quote", "estimate",
  "எவ்வளவு", "விலை", "how much",
];

function mentionsCost(message: string): boolean {
  const lower = message.toLowerCase();
  return COST_KEYWORDS.some((keyword) => lower.includes(keyword));
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Check if user is asking about cost/pricing
    let costEstimateContext = "";
    if (mentionsCost(message)) {
       console.log("Cost keyword detected, calling extract API...");
      try {
        const estimateRes = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/cost-estimate/extract`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
          }
        );
         console.log("Estimate API status:", estimateRes.status);


        if (estimateRes.ok) {
          const requirements = await estimateRes.json();

          if (requirements?.projectType) {
            const estimate = calculateEstimate(requirements);

            costEstimateContext = `

ESTIMATE CONTEXT: Based on the user's message, here is a calculated rough estimate:
Project type: ${estimate.projectType}
Estimated range: ₹${estimate.minEstimate.toLocaleString()} - ₹${estimate.maxEstimate.toLocaleString()}
Mention this range naturally, and note the final quote depends on exact requirements. Recommend booking a consultation for an exact quote.`;
          }
        }
      } catch (err) {
        console.error("Cost estimate lookup failed:", err);
      }
    }

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3.5-flash-lite",
      contents: `${SYSTEM_PROMPT}${costEstimateContext}\n\nUser: ${message}`,
      config: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of responseStream) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Sorry, something went wrong.", { status: 500 });
  }
}