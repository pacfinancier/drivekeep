import { HowItWorksHero } from "@/components/sections/how-it-works/hero";
import { ProcessSteps } from "@/components/sections/how-it-works/process-steps";
import { Requirements } from "@/components/sections/how-it-works/requirements";
import { FAQ } from "@/components/sections/how-it-works/faq";
import { StartDriving } from "@/components/sections/how-it-works/start-driving";

export default function HowItWorks() {
  return (
    <main className="min-h-screen">
      <HowItWorksHero />
      <ProcessSteps />
      <Requirements />
      <FAQ />
      <StartDriving />
    </main>
  );
}