"use client";

import { Clock } from "lucide-react";

export function DeliveryTimeframe() {
  return (
    <div className="border-t pt-6">
      <h4 className="font-semibold mb-4">Delivery Timeframe</h4>
      <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
        <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
        <p className="text-sm text-gray-600">
          Please note that delivery of vehicles is expected within 2-4 weeks from the date of your completed transaction. 
          This timeframe allows for necessary processing of tax, title, license, and any applicable fees.
        </p>
      </div>
    </div>
  );
}