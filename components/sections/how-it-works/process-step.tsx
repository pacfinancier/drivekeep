"use client";

import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProcessStep({ icon: Icon, title, description }: ProcessStepProps) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}