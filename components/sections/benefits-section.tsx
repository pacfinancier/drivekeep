"use client";

import { Shield } from "lucide-react";

const BENEFITS = [
  {
    icon: Shield,
    title: "Professional Support",
    description: "Backed by experienced UBER drivers and industry professionals"
  }
] as const;

export function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Keep is operated by professional drivers like you
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Sign up and drive with Keep today.
          </p>
        </div>
        
        <div className="flex justify-center">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div 
              key={title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow max-w-md"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}