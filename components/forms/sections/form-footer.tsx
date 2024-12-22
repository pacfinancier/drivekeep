"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ReCAPTCHA from "react-google-recaptcha";

interface FormFooterProps {
  loading: boolean;
  acceptTerms: boolean;
  onAcceptTermsChange: (checked: boolean) => void;
  onRecaptchaChange: (token: string | null) => void;
  error?: string;
  recaptchaError?: string;
}

export function FormFooter({ 
  loading, 
  acceptTerms, 
  onAcceptTermsChange, 
  onRecaptchaChange,
  error,
  recaptchaError 
}: FormFooterProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-2">
        <Checkbox
          id="terms"
          checked={acceptTerms}
          onCheckedChange={onAcceptTermsChange}
          className={error ? "border-red-500" : ""}
        />
        <div className="space-y-1 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm text-gray-600"
          >
            I agree to the{" "}
            <Link href="/terms-of-use" className="text-blue-600 hover:text-blue-700 underline">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>
          </Label>
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
          onChange={onRecaptchaChange}
        />
      </div>
      {recaptchaError && (
        <p className="text-red-500 text-sm text-center">{recaptchaError}</p>
      )}

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        disabled={loading}
      >
        {loading ? "Processing..." : "Next"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:text-blue-700 underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}