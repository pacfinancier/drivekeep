"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { GetStartedFormData } from "@/lib/validations/get-started";

interface AccountInfoProps {
  data: GetStartedFormData;
  onChange: (data: GetStartedFormData) => void;
  errors: Partial<Record<keyof GetStartedFormData, string>>;
}

const REFERRAL_SOURCES = [
  { value: "search", label: "Search Engine" },
  { value: "social", label: "Social Media" },
  { value: "friend", label: "Friend/Family" },
  { value: "uber", label: "Uber Platform" },
  { value: "other", label: "Other" }
] as const;

export function AccountInfo({ data, onChange, errors }: AccountInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Account Information</h3>
      
      <div>
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
          className={errors.password ? "border-red-500" : ""}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
        <p className="text-sm text-gray-500 mt-1">
          Must be at least 8 characters
        </p>
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={(e) => onChange({ ...data, confirmPassword: e.target.value })}
          className={errors.confirmPassword ? "border-red-500" : ""}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <Label htmlFor="referralSource">How did you hear about us? *</Label>
        <Select
          value={data.referralSource}
          onValueChange={(referralSource) => onChange({ ...data, referralSource })}
        >
          <SelectTrigger className={errors.referralSource ? "border-red-500" : ""}>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            {REFERRAL_SOURCES.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.referralSource && (
          <p className="text-red-500 text-sm mt-1">{errors.referralSource}</p>
        )}
      </div>
    </div>
  );
}