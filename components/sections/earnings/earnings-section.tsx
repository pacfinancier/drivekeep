"use client";

import { EarningsCarousel } from "./earnings-carousel";

export function EarningsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Maximize Your Earnings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drive premium vehicles and earn more with every trip. Our drivers consistently earn more than the market average.
          </p>
        </div>
        
        <EarningsCarousel />
      </div>
    </section>
  );
}