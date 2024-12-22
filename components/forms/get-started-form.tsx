"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GetStartedFormData, validateGetStartedForm } from "@/lib/validations/get-started";
import { PersonalInfo } from "./sections/personal-info";
import { ContactInfo } from "./sections/contact-info";
import { DriverInfo } from "./sections/driver-info";
import { AccountInfo } from "./sections/account-info";
import { FormHeader } from "./sections/form-header";
import { FormFooter } from "./sections/form-footer";
import { Alert } from "@/components/ui/alert";
import { signUp } from "@/lib/supabase/auth";

const INITIAL_FORM_DATA: GetStartedFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  driversLicense: "",
  uberAccount: "",
  vehiclePreference: "",
  startDate: "",
  referralSource: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false
};

export function GetStartedForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<GetStartedFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof GetStartedFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecaptchaError("");

    if (!recaptchaToken) {
      setRecaptchaError("Please complete the reCAPTCHA verification");
      return;
    }

    const validationErrors = validateGetStartedForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const { error } = await signUp(formData.email, formData.password);
      if (error) throw error;
      
      // TODO: Save additional user data to Supabase
      router.push("/profile");
    } catch (err: any) {
      setErrors({ email: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormHeader />

      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive">
          Please correct the errors in the form to continue
        </Alert>
      )}

      <div className="space-y-8">
        <PersonalInfo
          data={formData}
          onChange={setFormData}
          errors={errors}
        />

        <ContactInfo
          data={formData}
          onChange={setFormData}
          errors={errors}
        />

        <DriverInfo
          data={formData}
          onChange={setFormData}
          errors={errors}
        />

        <AccountInfo
          data={formData}
          onChange={setFormData}
          errors={errors}
        />
      </div>

      <FormFooter
        loading={loading}
        acceptTerms={formData.acceptTerms}
        onAcceptTermsChange={(acceptTerms) => setFormData({ ...formData, acceptTerms })}
        onRecaptchaChange={setRecaptchaToken}
        error={errors.acceptTerms}
        recaptchaError={recaptchaError}
      />
    </form>
  );
}