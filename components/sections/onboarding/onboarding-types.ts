import { LucideIcon } from "lucide-react";

export interface OnboardingOption {
  name: string;
  description: string;
}

export interface OnboardingStep {
  title: string;
  description: string;
  icon: LucideIcon;
  options?: OnboardingOption[];
}