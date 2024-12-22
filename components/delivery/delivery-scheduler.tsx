"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DeliveryDatePicker } from "./delivery-date-picker";
import { DeliveryLocationForm } from "./delivery-location-form";
import { DeliverySummary } from "./delivery-summary";
import { DeliveryHeader } from "./delivery-header";
import { Button } from "@/components/ui/button";
import type { DeliveryDetails } from "./types";

export function DeliveryScheduler() {
  const router = useRouter();
  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    date: null,
    time: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    instructions: ""
  });

  const handleConfirm = async () => {
    // TODO: Save delivery details to Supabase
    router.push("/profile?delivery=confirmed");
  };

  return (
    <div className="space-y-8">
      <DeliveryHeader />
      
      <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
        <DeliveryDatePicker
          selectedDate={deliveryDetails.date}
          selectedTime={deliveryDetails.time}
          onDateChange={(date) => setDeliveryDetails({ ...deliveryDetails, date })}
          onTimeChange={(time) => setDeliveryDetails({ ...deliveryDetails, time })}
        />

        <DeliveryLocationForm
          details={deliveryDetails}
          onChange={setDeliveryDetails}
        />

        <DeliverySummary details={deliveryDetails} />

        <Button 
          onClick={handleConfirm}
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={!deliveryDetails.date || !deliveryDetails.address}
        >
          Confirm Delivery
        </Button>
      </div>
    </div>
  );
}