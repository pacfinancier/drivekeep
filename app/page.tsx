import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SignupSection } from "@/components/sections/signup-section";
import { OnboardingSection } from "@/components/sections/onboarding/onboarding-section";
import { Vehicles } from "@/components/sections/vehicles";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <OnboardingSection />
      <SignupSection />
      <Vehicles />
      <CTA />
    </main>
  );
}