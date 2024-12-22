"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoginHeader } from "./login-header";
import { LoginFields } from "./login-fields";
import { LoginFooter } from "./login-footer";
import { Alert } from "@/components/ui/alert";
import { signIn } from "@/lib/supabase/auth";
import { validateLoginForm } from "@/lib/validations/auth";
import type { LoginFormData } from "@/lib/validations/auth";

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateLoginForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const { error: authError } = await signIn(formData.email, formData.password);
      if (authError) throw authError;
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <LoginHeader />
      
      {error && (
        <Alert variant="destructive">
          {error}
        </Alert>
      )}

      <LoginFields
        formData={formData}
        onChange={setFormData}
        disabled={loading}
      />

      <LoginFooter loading={loading} />
    </form>
  );
}