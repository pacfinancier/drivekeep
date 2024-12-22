"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StartDriving() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Start Earning More?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join Keep today and get access to premium vehicles, comprehensive insurance, and 24/7 support.
        </p>
        <Link href="/get-started">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
}