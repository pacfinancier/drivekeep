"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileInfo } from "@/components/profile/profile-info";
import { PaymentMethods } from "@/components/profile/payment-methods";
import { DeliverySchedule } from "@/components/profile/delivery-schedule";
import { useAuth } from "@/components/auth/auth-provider";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) redirect("/signin");

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <ProfileHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProfileInfo />
              <PaymentMethods />
            </div>
            <div>
              <DeliverySchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}