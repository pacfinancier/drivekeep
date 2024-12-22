"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { GetStartedFormData } from "@/lib/validations/get-started";

interface PersonalInfoProps {
  data: GetStartedFormData;
  onChange: (data: GetStartedFormData) => void;
  errors: Partial<Record<keyof GetStartedFormData, string>>;
}

export function PersonalInfo({ data, onChange, errors }: PersonalInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Legal First Name *</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => onChange({ ...data, firstName: e.target.value })}
            className={errors.firstName ? "border-red-500" : ""}
            placeholder="As shown on your ID"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Legal Last Name *</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => onChange({ ...data, lastName: e.target.value })}
            className={errors.lastName ? "border-red-500" : ""}
            placeholder="As shown on your ID"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
    </div>
  );
}