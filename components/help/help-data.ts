"use client";

import { Car, DollarSign, Shield, Calendar, HelpCircle, FileText } from "lucide-react";

export interface HelpArticle {
  title: string;
  href: string;
}

export const HELP_CATEGORIES = [
  {
    title: "Vehicle Information",
    description: "Learn about our vehicle options and features",
    icon: Car,
    articles: [
      { title: "Available vehicle models", href: "/help/vehicles" },
      { title: "Vehicle maintenance and care", href: "/help/maintenance" },
      { title: "Insurance coverage details", href: "/help/insurance" }
    ]
  },
  {
    title: "Earnings & Payments",
    description: "Understanding your earnings and payment processes",
    icon: DollarSign,
    articles: [
      { title: "Payment schedules", href: "/help/payments" },
      { title: "Earnings calculator", href: "/help/calculator" },
      { title: "Payment methods", href: "/help/payment-methods" }
    ]
  },
  {
    title: "Account & Safety",
    description: "Account management and safety guidelines",
    icon: Shield,
    articles: [
      { title: "Account security", href: "/help/security" },
      { title: "Safety guidelines", href: "/help/safety" },
      { title: "Privacy policy", href: "/help/privacy" }
    ]
  },
  {
    title: "Scheduling & Delivery",
    description: "Managing your vehicle delivery and schedule",
    icon: Calendar,
    articles: [
      { title: "Delivery process", href: "/help/delivery" },
      { title: "Scheduling options", href: "/help/scheduling" },
      { title: "Rescheduling and cancellations", href: "/help/changes" }
    ]
  }
] as const;