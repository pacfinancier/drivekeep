"use client";

import { Check } from "lucide-react";
import { type SignupStep } from "./types";

interface ChecklistProps {
  steps: readonly SignupStep[];
}

export function Checklist({ steps }: ChecklistProps) {
  return (
    <ul className="space-y-4">
      {steps.map((step) => (
        <li key={step.number} className="flex items-center space-x-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
            <Check className="h-4 w-4 text-white" />
          </div>
          <span>{step.title}</span>
        </li>
      ))}
    </ul>
  );
}