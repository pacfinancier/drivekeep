"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { STATES } from "@/lib/constants";
import { GetStartedFormData } from "@/lib/validations/get-started";

interface FormFieldsProps {
  formData: GetStartedFormData;
  setFormData: (data: GetStartedFormData) => void;
  errors: Partial<Record<keyof GetStartedFormData, string>>;
}

export function FormFields({ formData, setFormData, errors }: FormFieldsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Rest of the component remains the same */}
    </div>
  );
}