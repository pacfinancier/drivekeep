"use client";

import { Check } from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}