export function getBotReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("website")) {
    return "We build responsive business websites, corporate websites and custom web solutions.";
  }

  if (text.includes("seo")) {
    return "Our SEO services help improve Google rankings, Core Web Vitals and organic traffic.";
  }

  if (text.includes("ui")) {
    return "Our UI/UX team designs modern, responsive and user-friendly interfaces.";
  }

  if (text.includes("api")) {
    return "We integrate payment gateways, CRMs, third-party APIs and custom backend services.";
  }

  if (text.includes("ecommerce")) {
    return "We develop scalable e-commerce websites with secure payment integration.";
  }

  return "Thanks for contacting Apexon Tech. One of our experts can help you with your requirement.";
}