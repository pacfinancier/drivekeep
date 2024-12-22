"use client";

import { OnboardingCarousel } from "./onboarding-carousel";
import { OnboardingHeader } from "./onboarding-header";

export function OnboardingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <OnboardingHeader />
        <OnboardingCarousel />
      </div>
    </section>
  );
}