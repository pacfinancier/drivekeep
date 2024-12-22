"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import type { LoginFormData } from "@/lib/validations/auth";

interface LoginFieldsProps {
  formData: LoginFormData;
  onChange: (data: LoginFormData) => void;
  disabled?: boolean;
}

export function LoginFields({ formData, onChange, disabled }: LoginFieldsProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => onChange({ ...formData, email: e.target.value })}
          disabled={disabled}
          className="mt-1"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link 
            href="/reset-password" 
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => onChange({ ...formData, password: e.target.value })}
          disabled={disabled}
          className="mt-1"
        />
      </div>
    </div>
  );
}