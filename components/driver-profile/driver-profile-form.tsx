"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhotoUpload } from "./photo-upload";
import { LicenseUpload } from "./license-upload";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert";

export function DriverProfileForm() {
  const router = useRouter();
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [licensePhoto, setLicensePhoto] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profilePhoto || !licensePhoto) {
      setError("Please upload both your profile photo and driver's license");
      return;
    }

    setLoading(true);
    try {
      // TODO: Upload photos to Supabase storage
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to upload photos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <Alert variant="destructive">{error}</Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PhotoUpload
          file={profilePhoto}
          onFileSelect={setProfilePhoto}
          title="Profile Photo"
          description="Upload a clear photo of your face"
        />

        <LicenseUpload
          file={licensePhoto}
          onFileSelect={setLicensePhoto}
          title="Driver's License"
          description="Upload a photo of your valid driver's license"
        />
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Continue"}
        </Button>
      </div>
    </form>
  );
}