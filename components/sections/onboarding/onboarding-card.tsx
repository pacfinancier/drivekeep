"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OnboardingStep } from "./onboarding-types";
import Link from "next/link";

export function OnboardingCard({ title, description, options, icon: Icon }: OnboardingStep) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-blue-50 rounded-full">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center mb-8">{description}</p>
        {options && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {options.map((option) => (
              <div
                key={option.name}
                className="p-4 border rounded-lg text-center hover:border-blue-500 cursor-pointer transition-colors"
              >
                <h4 className="font-semibold mb-2">{option.name}</h4>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          <Link href="/get-started">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}