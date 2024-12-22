"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EarningsCard } from "./earnings-card";
import { EARNINGS_DATA } from "./earnings-data";

export function EarningsCarousel() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {EARNINGS_DATA.map((data) => (
          <CarouselItem key={data.title} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="p-1">
              <EarningsCard {...data} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
    </Carousel>
  );
}