import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/Button";
import { SearchX } from "lucide-react";

/** Next.js App Router special file — rendered automatically for unmatched routes. */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <SearchX size={48} className="text-ink-400" />
      <h1 className="font-display text-3xl text-ink-900 md:text-4xl">Page not found</h1>
      <p className="max-w-md text-ink-600">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
      <div className="flex gap-4">
        <Button href="/">Go to Homepage</Button>
        <Link href="/services" className="flex items-center text-sm text-ink-500 hover:text-ink-700">Browse Services</Link>
      </div>
    </Container>
  );
}
