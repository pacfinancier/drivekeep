"use client";

import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface EarningsCardProps {
  title: string;
  amount: string;
  description: string;
}

export function EarningsCard({ title, amount, description }: EarningsCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="p-2 bg-blue-50 rounded-full">
          <DollarSign className="h-6 w-6 text-blue-600" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold text-blue-600">{amount}</span>
          <span className="text-gray-500 ml-1">/ week</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}