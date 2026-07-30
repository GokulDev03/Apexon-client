"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PendingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!token) {
      setChecking(false);
      return;
    }

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/status?token=${token}`);
        const data = await res.json();

        if (data.status === "approved" || data.status === "rejected") {
          clearInterval(interval);
          router.push(`/status/${token}`);
        }
      } catch (err) {
        console.error("Status check failed", err);
      }
    }, 5000); // every 5 seconds check pannum

    return () => clearInterval(interval);
  }, [token, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold">Request Submitted 🎉</h1>

        <p className="mt-4">
          Thank you! Your consultation request has been received.
        </p>

        <p className="mt-2">
          Please wait until our team reviews your request.
        </p>

        <p className="mt-2 text-orange-600 font-semibold">
          Status: Pending Approval
        </p>

        <p className="mt-4 text-sm text-gray-500">
          This page will update automatically once reviewed.
        </p>
      </div>
    </div>
  );
}