"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegistrationHeader } from "./registration-header";
import { EarningLevelSelect } from "./earning-level-select";
import { PersonalInfo } from "./personal-info";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";
import { signUp } from "@/lib/supabase/auth";
import { validateRegistrationForm } from "@/lib/validations/registration";
import type { RegistrationFormData } from "@/lib/validations/registration";

export function RegistrationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    earningLevel: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateRegistrationForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const { error: authError } = await signUp(formData.email, formData.password);
      if (authError) throw authError;
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-8">
      <RegistrationHeader />
      
      {error && (
        <Alert variant="destructive">
          {error}
        </Alert>
      )}

      <EarningLevelSelect
        value={formData.earningLevel}
        onChange={(earningLevel) => setFormData({ ...formData, earningLevel })}
      />

      <PersonalInfo
        data={formData}
        onChange={setFormData}
        disabled={loading}
      />

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}