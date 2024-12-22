"use client";

import { PaymentForm } from "@/components/payment/payment-form";
import { PaymentSummary } from "@/components/payment/payment-summary";
import { PaymentHeader } from "@/components/payment/payment-header";
import { VehiclePreview } from "@/components/payment/vehicle-preview";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <PaymentHeader />
        <VehiclePreview
          image="https://images.unsplash.com/photo-1631294838040-3130dcfa0302?auto=format&fit=crop&q=80"
          name="Jeep Wagoneer"
          description="Luxury full-size SUV perfect for Uber Black and XXL rides"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PaymentForm />
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
}