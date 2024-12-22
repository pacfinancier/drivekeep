"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "What's included in the weekly rate?",
    answer: "Our weekly rate includes the vehicle rental, comprehensive insurance coverage, regular maintenance, and 24/7 roadside assistance. There are no hidden fees or additional charges."
  },
  {
    question: "Is there a minimum rental period?",
    answer: "Yes, our minimum rental period is 4 weeks. This allows you to properly evaluate the vehicle and establish a consistent earning pattern."
  },
  {
    question: "Can I switch vehicles?",
    answer: "Yes, you can switch to a different vehicle after your initial rental period. Contact our support team to arrange a vehicle switch."
  },
  {
    question: "What happens if I need maintenance?",
    answer: "All maintenance is included in your weekly rate. Simply contact our support team to schedule service at one of our approved service centers."
  }
] as const;

export function PricingFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}