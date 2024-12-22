"use client";

import { PricingHeader } from "@/components/pricing/pricing-header";
import { PricingTiers } from "@/components/pricing/pricing-tiers";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <PricingHeader />
        <PricingTiers />
        <PricingFAQ />
      </div>
    </div>
  );
}