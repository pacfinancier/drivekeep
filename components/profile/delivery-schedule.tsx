"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

const UPCOMING_DELIVERY = {
  date: "December 28, 2024",
  time: "2:00 PM - 4:00 PM",
  vehicle: "Jeep Wagoneer",
  status: "Scheduled"
};

export function DeliverySchedule() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-xl font-semibold mb-6">Delivery Schedule</h2>

      {UPCOMING_DELIVERY ? (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Upcoming Delivery</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{UPCOMING_DELIVERY.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{UPCOMING_DELIVERY.time}</span>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm">
              {UPCOMING_DELIVERY.vehicle} delivery {UPCOMING_DELIVERY.status.toLowerCase()}
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Modify Schedule
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-gray-600">No deliveries scheduled</p>
          <Link href="/schedule-delivery">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Schedule Delivery
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}