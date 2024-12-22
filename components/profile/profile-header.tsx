"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/supabase/auth";
import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";

export function ProfileHeader() {
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // TODO: Implement photo upload to Supabase storage
    setUploading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
              {/* TODO: Show profile photo if available */}
              <span className="text-2xl text-gray-500">JD</span>
            </div>
            <label 
              htmlFor="photo-upload" 
              className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700"
            >
              <Camera className="h-4 w-4 text-white" />
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
              disabled={uploading}
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}