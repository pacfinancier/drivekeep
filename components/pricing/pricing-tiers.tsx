"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PRICING_TIERS = [
  {
    name: "UberX",
    vehicle: "Mazda CX-50",
    price: "$99",
    description: "Perfect for UberX drivers looking for a reliable, efficient vehicle",
    features: [
      "Premium crossover SUV",
      "Excellent fuel efficiency",
      "Advanced safety features",
      "Comfortable interior",
      "Regular maintenance included",
      "24/7 roadside assistance"
    ],
    route: "/payment-mazda"
  },
  {
    name: "Comfort",
    vehicle: "Ford Edge",
    price: "$149",
    description: "Ideal for Uber Comfort drivers seeking higher earnings",
    popular: true,
    features: [
      "Spacious mid-size SUV",
      "Premium interior finishes",
      "Extra passenger legroom",
      "Advanced climate control",
      "Regular maintenance included",
      "24/7 roadside assistance"
    ],
    route: "/payment-comfort"
  },
  {
    name: "Premium",
    vehicle: "Jeep Wagoneer",
    price: "$249",
    description: "Luxury vehicle for maximum earnings with Uber Black/XXL",
    features: [
      "Luxury full-size SUV",
      "Premium leather interior",
      "Third-row seating",
      "Advanced entertainment system",
      "Regular maintenance included",
      "24/7 roadside assistance"
    ],
    route: "/payment"
  }
] as const;

export function PricingTiers() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
      {PRICING_TIERS.map((tier) => (
        <div 
          key={tier.name}
          className={`relative bg-white rounded-lg shadow-sm p-6 md:p-8 ${
            tier.popular ? 'ring-2 ring-blue-600' : 'border'
          }`}
        >
          {tier.popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </span>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">{tier.name}</h3>
            <p className="text-gray-600 mt-2">{tier.vehicle}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-gray-600">/week</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => router.push(tier.route)}
            className={`w-full ${
              tier.popular 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-black hover:bg-gray-800'
            }`}
          >
            Select {tier.name}
          </Button>
        </div>
      ))}
    </div>
  );
}