"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const EARNING_LEVELS = [
  {
    value: "starter",
    title: "Starter",
    amount: "$1,000 - $1,500",
    description: "Perfect for part-time drivers"
  },
  {
    value: "professional",
    title: "Professional",
    amount: "$1,500 - $2,000",
    description: "Ideal for full-time drivers"
  },
  {
    value: "expert",
    title: "Expert",
    amount: "$2,000+",
    description: "For experienced drivers aiming for maximum earnings"
  }
] as const;

interface EarningLevelSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function EarningLevelSelect({ value, onChange }: EarningLevelSelectProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Your Earning Level</h3>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="grid gap-4">
          {EARNING_LEVELS.map((level) => (
            <Label
              key={level.value}
              className={`flex flex-col p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${
                value === level.value ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <RadioGroupItem 
                value={level.value} 
                className="sr-only"
              />
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{level.title}</div>
                  <div className="text-sm text-gray-500">{level.description}</div>
                </div>
                <div className="text-lg font-semibold text-blue-600">
                  {level.amount}
                </div>
              </div>
            </Label>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}