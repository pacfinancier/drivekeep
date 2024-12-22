"use client";

import { GetStartedButton } from "@/components/ui/get-started-button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
          alt="Luxury car representing premium vehicles for Uber drivers"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Keep Your Money
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed">
                No Lines, No High Deposits, No Waiting. Choose your weekly goal, and we'll bring the perfect car to you.
              </p>
            </div>
            <div>
              <GetStartedButton className="h-14 px-8 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}