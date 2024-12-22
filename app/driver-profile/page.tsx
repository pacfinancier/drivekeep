"use client";

import { DriverProfileForm } from "@/components/driver-profile/driver-profile-form";
import { ProfileProgress } from "@/components/driver-profile/profile-progress";

export default function DriverProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Driver Profile</h1>
            <p className="mt-2 text-gray-600">Upload your photo and driver's license to get started</p>
          </div>
          
          <ProfileProgress />
          <DriverProfileForm />
        </div>
      </div>
    </div>
  );
}