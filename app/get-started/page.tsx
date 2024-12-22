"use client";

import { GetStartedForm } from "@/components/forms/get-started-form";
import { WhyChooseKeep } from "@/components/sections/why-choose-keep";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center py-24 md:py-32">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Keep is operated by rideshare drivers just like you.
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pb-16">
          {/* Left side - Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <GetStartedForm />
          </div>

          {/* Right side - Content */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Get Started</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Switch to a simpler experience and keep more money in your pocket. To begin, fill out your contact information and password.
              </p>
            </div>

            <WhyChooseKeep />
          </div>
        </div>
      </div>
    </div>
  );
}