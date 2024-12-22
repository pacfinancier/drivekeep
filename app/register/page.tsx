"use client";

import { RegistrationForm } from "@/components/auth/registration/registration-form";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <RegistrationForm />
      </div>
    </main>
  );
}