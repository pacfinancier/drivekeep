"use client";

import { HelpHeader } from "@/components/help/help-header";
import { HelpCategories } from "@/components/help/help-categories";
import { ContactSupport } from "@/components/help/contact-support";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <HelpHeader />
          <HelpCategories />
          <ContactSupport />
        </div>
      </div>
    </div>
  );
}