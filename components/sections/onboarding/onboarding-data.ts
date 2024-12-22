"use client";

import { Car, ClipboardCheck, Calendar } from "lucide-react";
import { OnboardingStep } from "./onboarding-types";

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    title: "1. Create Your Account",
    description: "Quick and easy signup process with basic information",
    icon: ClipboardCheck,
    options: [
      {
        name: "Basic Info",
        description: "Name, Address, Email and Phone"
      },
      {
        name: "Driver Details",
        description: "License and experience"
      },
      {
        name: "Preferences",
        description: "Schedule and earnings goals"
      }
    ]
  },
  {
    title: "2. Vehicle Selection",
    description: "Choose from our premium fleet based on your earnings goals",
    icon: Car,
    options: [
      {
        name: "Luxury",
        description: "High-end vehicles"
      },
      {
        name: "Comfort",
        description: "Mid-range premium cars"
      },
      {
        name: "Economy",
        description: "Efficient daily drivers"
      }
    ]
  },
  {
    title: "3. Schedule Your Delivery",
    description: "Choose when and where you want your vehicle delivered",
    icon: Calendar,
    options: [
      {
        name: "Pick a Date",
        description: "Select your preferred delivery date"
      },
      {
        name: "Choose Time",
        description: "Select a convenient time slot"
      },
      {
        name: "Set Location",
        description: "Specify your delivery address"
      }
    ]
  }
] as const;