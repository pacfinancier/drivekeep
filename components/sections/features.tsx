"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Features() {
  const [mounted, setMounted] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const router = useRouter();

  const amounts = [
    { value: "1000", display: "$1,000", route: "/payment-mazda" },
    { value: "1500", display: "$1,500", route: "/payment-comfort" },
    { value: "2000", display: "$2,000", route: "/payment" }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAmountSelect = (amount: string, route: string) => {
    setSelectedAmount(amount);
    router.push(route);
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How much do you want to make per week?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {amounts.map((amount) => (
              <Button
                key={amount.value}
                variant={selectedAmount === amount.value ? "default" : "outline"}
                className={`h-20 text-2xl ${
                  selectedAmount === amount.value
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-blue-50"
                }`}
                onClick={() => handleAmountSelect(amount.value, amount.route)}
              >
                {amount.display}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}