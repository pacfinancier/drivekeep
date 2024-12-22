"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { PaymentMethod } from "./payment-method";
import { BillingInfo } from "./billing-info";
import { TollTagSection } from "./toll-tag-section";
import { validatePaymentForm } from "@/lib/validations/payment";
import type { PaymentFormData } from "@/lib/validations/payment";

export function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    expiry: "",
    cvc: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryZip: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PaymentFormData, string>>>({});
  const [includeTollTag, setIncludeTollTag] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePaymentForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsProcessing(true);
    
    try {
      // Process payment logic here
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle successful payment
    } catch (error) {
      setErrors({ cardNumber: "Payment processing failed. Please try again." });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive">
          Please correct the errors in the form to continue
        </Alert>
      )}

      <PaymentMethod
        formData={formData}
        onChange={setFormData}
        errors={errors}
      />

      <BillingInfo
        formData={formData}
        onChange={setFormData}
        errors={errors}
      />

      <TollTagSection 
        enabled={includeTollTag}
        onToggle={setIncludeTollTag}
      />
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Complete Payment"}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Your payment information is encrypted and secure
      </p>
    </form>
  );
}