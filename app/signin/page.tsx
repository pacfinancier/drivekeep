"use client";

import { AuthForm } from "@/components/auth/auth-form";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">KEEP</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in</h2>
          <p className="mt-2 text-gray-600">
            Welcome back! Please sign in to your account.
          </p>
        </div>
        <AuthForm mode="signin" />
      </div>
    </main>
  );
}