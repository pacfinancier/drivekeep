"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LoginFooterProps {
  loading?: boolean;
}

export function LoginFooter({ loading }: LoginFooterProps) {
  return (
    <div className="space-y-4">
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/get-started" className="text-blue-600 hover:text-blue-500">
          Get started
        </Link>
      </p>
    </div>
  );
}