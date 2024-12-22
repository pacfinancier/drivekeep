"use client";

import { Button } from "@/components/ui/button";

export function FormFooter() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        By continuing, you agree to our Terms of Service and acknowledge our Privacy Policy.
      </p>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Next
      </Button>
    </div>
  );
}