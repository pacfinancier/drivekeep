"use client";

import { Car, ClipboardCheck, Shield } from "lucide-react";
import { ProcessStep } from "./process-step";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "1. Quick Application",
    description: "Complete our simple online application in under 5 minutes. We'll need your basic information and driving history."
  },
  {
    icon: Car,
    title: "2. Choose Your Vehicle",
    description: "Select from our fleet of premium vehicles based on your earnings goals and preferences."
  },
  {
    icon: Shield,
    title: "3. Start Driving",
    description: "Get your vehicle delivered to your location, fully insured and ready to drive for Uber."
  }
] as const;

export function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <ProcessStep key={step.title} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}