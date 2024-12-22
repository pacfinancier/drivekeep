"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

export function ContactSupport() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Still need help?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Button
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2"
          onClick={() => window.location.href = "mailto:support@drivekeep.com"}
        >
          <Mail className="h-6 w-6" />
          <span className="font-semibold">Email Support</span>
          <span className="text-sm text-gray-500">support@drivekeep.com</span>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2"
          onClick={() => window.location.href = "tel:+18885550123"}
        >
          <Phone className="h-6 w-6" />
          <span className="font-semibold">Phone Support</span>
          <span className="text-sm text-gray-500">(888) 555-0123</span>
        </Button>

        <Button
          variant="outline"
          className="h-auto py-6 flex flex-col items-center gap-2"
          onClick={() => {/* Open chat */}}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="font-semibold">Live Chat</span>
          <span className="text-sm text-gray-500">Available 24/7</span>
        </Button>
      </div>
    </div>
  );
}