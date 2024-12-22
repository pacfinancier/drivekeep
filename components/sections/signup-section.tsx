"use client";

import { PhoneMockup } from "./hero/phone-mockup";

export function SignupSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center max-w-xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-gray-600">
              Sign up in minutes and join our community of successful drivers
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}