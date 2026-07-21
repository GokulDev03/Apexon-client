"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g. "/blog" — will append "?page=n"
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageHref = (page: number) => `${basePath}?page=${page}`;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <Link
        href={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-ink-200",
          currentPage === 1 ? "pointer-events-none opacity-40" : "hover:bg-ink-100"
        )}
      >
        <ChevronLeft size={16} />
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
            page === currentPage ? "bg-brand-500 text-white" : "text-ink-600 hover:bg-ink-100"
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-ink-200",
          currentPage === totalPages ? "pointer-events-none opacity-40" : "hover:bg-ink-100"
        )}
      >
        <ChevronRight size={16} />
      </Link>
    </nav>
  );
}
