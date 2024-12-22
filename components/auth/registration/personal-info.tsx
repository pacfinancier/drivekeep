"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RegistrationFormData } from "@/lib/validations/registration";

interface PersonalInfoProps {
  data: RegistrationFormData;
  onChange: (data: RegistrationFormData) => void;
  disabled?: boolean;
}

export function PersonalInfo({ data, onChange, disabled }: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Personal Information</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => onChange({ ...data, firstName: e.target.value })}
            disabled={disabled}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => onChange({ ...data, lastName: e.target.value })}
            disabled={disabled}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          disabled={disabled}
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
          disabled={disabled}
        />
        <p className="text-sm text-gray-500 mt-1">
          Must be at least 8 characters
        </p>
      </div>
    </div>
  );
}