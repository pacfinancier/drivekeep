"use client";

import { PaymentForm } from "@/components/payment/payment-form";
import { MazdaPaymentSummary } from "@/components/payment/mazda-payment-summary";
import { MazdaPaymentHeader } from "@/components/payment/mazda-payment-header";
import { VehiclePreview } from "@/components/payment/vehicle-preview";

export default function MazdaPaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <MazdaPaymentHeader />
        <VehiclePreview
          image="https://images.unsplash.com/photo-1687234389549-05353b1d8df7?auto=format&fit=crop&q=80"
          name="Mazda CX-50"
          description="Premium crossover SUV perfect for UberX rides"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PaymentForm />
          <MazdaPaymentSummary />
        </div>
      </div>
    </div>
  );
}