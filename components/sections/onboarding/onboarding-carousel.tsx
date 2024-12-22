"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ONBOARDING_STEPS } from "./onboarding-data";
import { OnboardingCard } from "./onboarding-card";

export function OnboardingCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {ONBOARDING_STEPS.map((step) => (
          <CarouselItem key={step.title} className="basis-full">
            <OnboardingCard {...step} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}