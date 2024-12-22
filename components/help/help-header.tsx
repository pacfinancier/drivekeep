"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HelpHeader() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">How can we help?</h1>
      <div className="max-w-xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="search"
          placeholder="Search for help articles..."
          className="pl-10"
        />
      </div>
    </div>
  );
}