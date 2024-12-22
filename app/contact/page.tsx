"use client";

import { ContactHeader } from "@/components/contact/contact-header";
import { ContactForm } from "@/components/contact/contact-form";
import { DirectContact } from "@/components/contact/direct-contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <ContactHeader />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <DirectContact />
        </div>
      </div>
    </div>
  );
}