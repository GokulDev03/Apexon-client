"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function OfferToast() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      className="
        fixed z-[9998] animate-fade-up
        bottom-24 left-4 right-4
        sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs
      "
    >
      <div className="relative rounded-2xl bg-[#0d3320] p-4 pr-8 shadow-2xl border border-[#d4a574]/20">
        {/* Close button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white/60 hover:text-white transition"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <p className="text-xs font-semibold uppercase tracking-wide text-[#d4a574]">
          Limited Time Offer
        </p>

        <p className="mt-1 text-base sm:text-lg font-bold text-white">
          All Services — <span className="text-[#d4a574]">50% OFF</span>
        </p>

        <Link
          href="/book-consultation"
          className="mt-3 inline-flex items-center justify-center rounded-full bg-[#d4a574] px-4 py-2 text-sm font-semibold text-[#0d3320] transition hover:bg-[#c08f5a]"
        >
          Contact Us
        </Link>

        <p className="mt-2 text-[11px] text-white/50">
          Offer valid for a limited time only
        </p>
      </div>
    </div>
  );
}