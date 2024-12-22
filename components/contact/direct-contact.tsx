"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email",
    value: "support@drivekeep.com",
    description: "24/7 email support",
    action: "mailto:support@drivekeep.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(888) 555-0123",
    description: "Mon-Fri 9AM-6PM EST",
    action: "tel:+18885550123"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Typical response in 5 minutes",
    action: "#chat"
  }
] as const;

export function DirectContact() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Direct Contact</h2>
      <div className="space-y-6">
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.title}
            href={method.action}
            className="flex items-start gap-4 p-4 rounded-lg border hover:border-blue-500 transition-colors"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <method.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">{method.title}</h3>
              <p className="text-blue-600">{method.value}</p>
              <p className="text-sm text-gray-500">{method.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}