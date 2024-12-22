"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, Lock } from "lucide-react";
import type { PaymentFormData } from "@/lib/validations/payment";

interface PaymentMethodProps {
  formData: PaymentFormData;
  onChange: (data: PaymentFormData) => void;
  errors: Partial<Record<keyof PaymentFormData, string>>;
}

export function PaymentMethod({ formData, onChange, errors }: PaymentMethodProps) {
  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    return digits.replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length >= 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <div className="flex items-center text-gray-500">
          <Lock className="h-4 w-4 mr-2" />
          <span className="text-sm">Secure Payment</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="cardNumber">Card Number *</Label>
          <div className="relative">
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => onChange({
                ...formData,
                cardNumber: formatCardNumber(e.target.value)
              })}
              className={`pl-10 ${errors.cardNumber ? "border-red-500" : ""}`}
            />
            <CreditCard className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="expiry">Expiry Date *</Label>
            <Input
              id="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={(e) => onChange({
                ...formData,
                expiry: formatExpiry(e.target.value)
              })}
              maxLength={5}
              className={errors.expiry ? "border-red-500" : ""}
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
            )}
          </div>
          <div>
            <Label htmlFor="cvc">CVC *</Label>
            <Input
              id="cvc"
              placeholder="123"
              value={formData.cvc}
              onChange={(e) => onChange({
                ...formData,
                cvc: e.target.value.replace(/\D/g, '').slice(0, 3)
              })}
              type="password"
              maxLength={3}
              className={errors.cvc ? "border-red-500" : ""}
            />
            {errors.cvc && (
              <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}