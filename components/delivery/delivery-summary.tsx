"use client";

import { format } from "date-fns";
import { MapPin, Calendar, Clock } from "lucide-react";
import type { DeliveryDetails } from "./types";

interface DeliverySummaryProps {
  details: DeliveryDetails;
}

export function DeliverySummary({ details }: DeliverySummaryProps) {
  if (!details.date || !details.address) return null;

  return (
    <div className="border rounded-lg p-6 bg-gray-50 space-y-4">
      <h3 className="font-semibold text-lg">Delivery Summary</h3>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <p className="font-medium">Date</p>
            <p className="text-gray-600">{format(details.date, "MMMM d, yyyy")}</p>
          </div>
        </div>

        {details.time && (
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <p className="font-medium">Time</p>
              <p className="text-gray-600">{details.time}</p>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-blue-600 mt-1" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-gray-600">
              {details.address}
              {details.city && `, ${details.city}`}
              {details.state && `, ${details.state}`}
              {details.zipCode && ` ${details.zipCode}`}
            </p>
            {details.instructions && (
              <p className="text-sm text-gray-500 mt-1">
                Note: {details.instructions}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}