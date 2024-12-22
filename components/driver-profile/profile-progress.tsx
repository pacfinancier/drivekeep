"use client";

import { CheckCircle2 } from "lucide-react";

const STEPS = [
  { label: "Account Created", completed: true },
  { label: "Profile Setup", completed: false },
  { label: "Select Your Vehicle", completed: false },
  { label: "Ready to Drive", completed: false }
] as const;

export function ProfileProgress() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
      
      <div className="relative flex justify-between">
        {STEPS.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
              step.completed ? "bg-green-500" : "bg-gray-200"
            }`}>
              {step.completed ? (
                <CheckCircle2 className="h-6 w-6 text-white" />
              ) : (
                <span className="text-gray-600">{index + 1}</span>
              )}
            </div>
            <span className={`mt-2 text-sm ${
              step.completed ? "text-green-600 font-medium" : "text-gray-500"
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}