import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildBreadcrumbs } from "@/seo/breadcrumb-helper";

interface PageLayoutProps {
  path: string;
  labels?: Record<string, string>;
  children: ReactNode;
  showBreadcrumb?: boolean;
}

/**
 * Wraps internal (non-homepage) pages with a consistent breadcrumb strip.
 * Individual page templates (Service/Industry/Technology/Location, etc.)
 * compose their own Hero + sections below this.
 */
export function PageLayout({ path, labels, children, showBreadcrumb = true }: PageLayoutProps) {
  const segments = buildBreadcrumbs(path, labels);

  return (
    <div>
      {showBreadcrumb && (
        <Container className="py-4">
          <Breadcrumb segments={segments} />
        </Container>
      )}
      {children}
    </div>
  );
}
