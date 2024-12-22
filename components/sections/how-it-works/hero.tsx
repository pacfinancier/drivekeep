"use client";

import Image from "next/image";

export function HowItWorksHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80"
          alt="Ford Edge being delivered to a happy customer"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
            Keep Your Money.
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            No Lines, No High Deposits, No Waiting. Choose your weekly goal, and we'll bring the perfect car to you.
          </p>
        </div>
      </div>
    </section>
  );
}