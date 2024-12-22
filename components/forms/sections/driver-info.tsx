"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { GetStartedFormData } from "@/lib/validations/get-started";

interface DriverInfoProps {
  data: GetStartedFormData;
  onChange: (data: GetStartedFormData) => void;
  errors: Partial<Record<keyof GetStartedFormData, string>>;
}

const UBER_ACCOUNT_OPTIONS = [
  { value: "active", label: "Active Uber Account" },
  { value: "pending", label: "Pending Approval" },
  { value: "none", label: "Need to Sign Up" }
] as const;

const VEHICLE_PREFERENCES = [
  { value: "uberx", label: "UberX (Mazda CX-50)" },
  { value: "comfort", label: "Uber Comfort (Ford Edge)" },
  { value: "premium", label: "Uber Black/XXL (Jeep Wagoneer)" }
] as const;

export function DriverInfo({ data, onChange, errors }: DriverInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Driver Information</h3>
      
      <div>
        <Label htmlFor="driversLicense">Driver's License Number *</Label>
        <Input
          id="driversLicense"
          value={data.driversLicense}
          onChange={(e) => onChange({ ...data, driversLicense: e.target.value })}
          className={errors.driversLicense ? "border-red-500" : ""}
        />
        {errors.driversLicense && (
          <p className="text-red-500 text-sm mt-1">{errors.driversLicense}</p>
        )}
      </div>

      <div>
        <Label htmlFor="uberAccount">Uber Account Status *</Label>
        <Select
          value={data.uberAccount}
          onValueChange={(uberAccount) => onChange({ ...data, uberAccount })}
        >
          <SelectTrigger className={errors.uberAccount ? "border-red-500" : ""}>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {UBER_ACCOUNT_OPTIONS.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.uberAccount && (
          <p className="text-red-500 text-sm mt-1">{errors.uberAccount}</p>
        )}
      </div>

      <div>
        <Label htmlFor="vehiclePreference">Vehicle Preference *</Label>
        <Select
          value={data.vehiclePreference}
          onValueChange={(vehiclePreference) => onChange({ ...data, vehiclePreference })}
        >
          <SelectTrigger className={errors.vehiclePreference ? "border-red-500" : ""}>
            <SelectValue placeholder="Select vehicle" />
          </SelectTrigger>
          <SelectContent>
            {VEHICLE_PREFERENCES.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.vehiclePreference && (
          <p className="text-red-500 text-sm mt-1">{errors.vehiclePreference}</p>
        )}
      </div>

      <div>
        <Label htmlFor="startDate">Desired Start Date *</Label>
        <Input
          id="startDate"
          type="date"
          value={data.startDate}
          onChange={(e) => onChange({ ...data, startDate: e.target.value })}
          className={errors.startDate ? "border-red-500" : ""}
          min={new Date().toISOString().split('T')[0]}
        />
        {errors.startDate && (
          <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
        )}
      </div>
    </div>
  );
}