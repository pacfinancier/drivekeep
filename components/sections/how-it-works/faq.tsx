"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "How much can I earn?",
    answer: "Earnings vary based on hours worked and vehicle type, but our drivers typically earn $1,000-$2,000 per week before expenses."
  },
  {
    question: "What's included in the weekly rate?",
    answer: "Our weekly rate includes the vehicle, insurance, maintenance, and 24/7 roadside assistance."
  },
  {
    question: "How long is the commitment?",
    answer: "We offer flexible terms starting from 4 weeks, with the option to extend or switch vehicles."
  },
  {
    question: "What happens if I need maintenance?",
    answer: "We cover all routine maintenance and repairs. Simply schedule service through our app, and we'll handle the rest."
  }
] as const;

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
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
      </div>
    </section>
  );
}