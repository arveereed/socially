"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center  text-white ">
      <div className="w-full max-w-md rounded-xl border border-zinc-800  p-8 shadow-lg">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
            <AlertTriangle className="h-6 w-6 text-zinc-300" />
          </div>
        </div>
        {/* Title */}
        <h1 className="mt-6 text-center text-xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        {/* Description */}
        <p className="mt-2 text-center text-sm text-zinc-400">
          An unexpected error occurred. Try again or return to the homepage.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm hover:bg-zinc-800 transition"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm hover:bg-zinc-900 transition"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>
        {/* Optional Error ID */}
        {error?.digest && (
          <p className="mt-6 text-center text-xs text-zinc-500">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
