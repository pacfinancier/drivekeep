"use client";

import { PaymentForm } from "@/components/payment/payment-form";
import { ComfortPaymentSummary } from "@/components/payment/comfort-payment-summary";
import { ComfortPaymentHeader } from "@/components/payment/comfort-payment-header";
import { VehiclePreview } from "@/components/payment/vehicle-preview";

export default function ComfortPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <ComfortPaymentHeader />
        <VehiclePreview
          image="https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80"
          name="Ford Edge"
          description="Premium mid-size SUV perfect for Uber Comfort rides"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PaymentForm />
          <ComfortPaymentSummary />
        </div>
      </div>
    </div>
  );
}