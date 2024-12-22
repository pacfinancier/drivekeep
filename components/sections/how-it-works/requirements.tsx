"use client";

import { Check } from "lucide-react";

const REQUIREMENTS = [
  "Valid driver's license",
  "Clean driving record",
  "21 years or older",
  "Smartphone with data plan",
  "Uber driver account",
  "Proof of residency"
] as const;

export function Requirements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REQUIREMENTS.map((requirement) => (
                <div key={requirement} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}