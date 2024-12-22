"use client";

import { DeliveryScheduler } from "@/components/delivery/delivery-scheduler";

export default function ScheduleDeliveryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <DeliveryScheduler />
        </div>
      </div>
    </div>
  );
}