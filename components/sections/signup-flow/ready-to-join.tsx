"use client";

import { Shield, DollarSign, Car } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BENEFITS = [
  {
    icon: Shield,
    text: "We work with the dealers and insurance companies to get you the best rates",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: DollarSign,
    text: "Select how much you want to earn per week",
    iconColor: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Car,
    text: "Select your new car",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50"
  }
] as const;

export function ReadyToJoin() {
  return (
    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80"
            alt="Driver using phone"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Ready to Join?</h3>
            <p className="text-lg text-gray-600">
              We'll run your background check and find the best rates for you
            </p>
          </div>
          
          <ul className="space-y-6">
            {BENEFITS.map(({ icon: Icon, text, iconColor, bgColor }) => (
              <li key={text} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 p-2 ${bgColor} rounded-lg`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>

          <Link href="/get-started">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}