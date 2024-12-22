"use client";

import { GetStartedButton } from "@/components/ui/get-started-button";
import { Shield, Star, Clock } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Switch to Keep</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join a team of successful Uber drivers and earn more money per trip. Keep more money in your pockets today.
          </p>
          <GetStartedButton size="lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Full Coverage</h3>
            <p className="text-gray-300">
              Drive with confidence and security
            </p>
          </div>
          <div className="text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Higher Ratings</h3>
            <p className="text-gray-300">
              Luxury vehicles lead to better reviews
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-300">
              Professional assistance whenever you need it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}