"use client";

import { Check } from "lucide-react";
import { RefundPolicy } from "./refund-policy";
import { DeliveryTimeframe } from "./delivery-timeframe";
import Link from "next/link";

const BASE_PAYMENT_DETAILS = [
  { label: "Vehicle Deposit", amount: 249.00 },
  { label: "Processing Fee", amount: 25.00 },
  { label: "Tax", amount: 21.60 }
];

const BENEFITS = [
  "Premium Jeep Wagoneer access",
  "Full coverage insurance included",
  "Regular scheduled maintenance",
  "24/7 premium roadside assistance",
  "Flexible rental terms",
  "No long-term commitment",
  "Toll Tag Account (optional)",
  "Unlimited miles",
  "Premium interior detailing",
  "Priority support line"
];

export function PaymentSummary() {
  const paymentDetails = [...BASE_PAYMENT_DETAILS];
  const subtotal = paymentDetails.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
      <h3 className="text-lg font-semibold">Order Summary</h3>

      <div className="space-y-4">
        {paymentDetails.map((item) => (
          <div key={item.label} className="flex justify-between text-gray-600">
            <span>{item.label}</span>
            <span>${item.amount.toFixed(2)}</span>
          </div>
        ))}
        
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-500">
            + $25/month if Toll Tag Account is enabled
          </p>
          <p className="text-sm text-gray-600">
            By placing this order, I agree to the{" "}
            <Link href="/terms-of-use" className="text-blue-600 hover:text-blue-700 underline">
              Keep Agreement
            </Link>
            ,{" "}
            <Link href="/terms-of-use" className="text-blue-600 hover:text-blue-700 underline">
              Terms of Use
            </Link>
            , and{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Agreement
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-semibold mb-4">Premium Features Included:</h4>
        <ul className="space-y-3">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <DeliveryTimeframe />
      <RefundPolicy />
    </div>
  );
}