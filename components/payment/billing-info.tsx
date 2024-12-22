"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { STATES } from "@/lib/constants";
import Link from "next/link";
import type { PaymentFormData } from "@/lib/validations/payment";

interface BillingInfoProps {
  formData: PaymentFormData;
  onChange: (data: PaymentFormData) => void;
  errors: Partial<Record<keyof PaymentFormData, string>>;
}

export function BillingInfo({ formData, onChange, errors }: BillingInfoProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Billing Information</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange({ ...formData, firstName: e.target.value })}
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onChange({ ...formData, lastName: e.target.value })}
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="address">Street Address *</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => onChange({ ...formData, address: e.target.value })}
          className={errors.address ? "border-red-500" : ""}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Label htmlFor="state">State *</Label>
          <Select
            value={formData.state}
            onValueChange={(state) => onChange({ ...formData, state })}
          >
            <SelectTrigger className={errors.state ? "border-red-500" : ""}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {STATES.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>
        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => onChange({ ...formData, city: e.target.value })}
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <Label htmlFor="zipCode">ZIP Code *</Label>
          <Input
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => onChange({ ...formData, zipCode: e.target.value })}
            className={errors.zipCode ? "border-red-500" : ""}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="text-lg font-semibold mb-4">Delivery Information</h4>
        <div className="space-y-4">
          <div>
            <Label htmlFor="deliveryZip">Delivery ZIP Code *</Label>
            <Input 
              id="deliveryZip"
              placeholder="Enter delivery ZIP code"
              className={`max-w-[200px] ${errors.deliveryZip ? "border-red-500" : ""}`}
              value={formData.deliveryZip}
              onChange={(e) => onChange({ ...formData, deliveryZip: e.target.value })}
            />
            {errors.deliveryZip && (
              <p className="text-red-500 text-sm mt-1">{errors.deliveryZip}</p>
            )}
            <p className="text-sm text-gray-500 mt-1">
              We'll deliver your vehicle to this location
            </p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 border-t pt-6">
        <p>
          By entering your contact information, you agree to receive communications from Keep about your inquiry, our services, and events. You can opt out of these communications at any time by visiting our{" "}
          <Link href="/opt-out" className="text-blue-600 hover:text-blue-700 underline">
            opt-out page
          </Link>
          {" "}or by unsubscribing within your account settings.
        </p>
      </div>
    </div>
  );
}