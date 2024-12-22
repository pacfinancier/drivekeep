"use client";

import { MapPin } from "lucide-react";

const LOCATIONS = [
  {
    city: "New York",
    address: "123 Broadway, New York, NY 10013",
    hours: "Mon-Fri: 9AM-6PM EST"
  },
  {
    city: "Los Angeles",
    address: "456 Wilshire Blvd, Los Angeles, CA 90024",
    hours: "Mon-Fri: 9AM-6PM PST"
  }
] as const;

export function OfficeLocations() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Office Locations</h2>
      <div className="space-y-6">
        {LOCATIONS.map((location) => (
          <div
            key={location.city}
            className="flex items-start gap-4 p-4 rounded-lg border"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">{location.city}</h3>
              <p className="text-gray-600">{location.address}</p>
              <p className="text-sm text-gray-500">{location.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}