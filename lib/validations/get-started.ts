"use client";

export interface GetStartedFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  driversLicense: string;
  uberAccount: string;
  vehiclePreference: string;
  startDate: string;
  referralSource: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export function validateGetStartedForm(data: GetStartedFormData): Partial<Record<keyof GetStartedFormData, string>> {
  const errors: Partial<Record<keyof GetStartedFormData, string>> = {};

  // Personal Information
  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  
  // Contact Information
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[\d\s-()]+$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  // Address
  if (!data.address) errors.address = "Street address is required";
  if (!data.city) errors.city = "City is required";
  if (!data.state) errors.state = "State is required";
  
  if (!data.zipCode) {
    errors.zipCode = "ZIP code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
    errors.zipCode = "Please enter a valid ZIP code";
  }

  // Driver Information
  if (!data.driversLicense) errors.driversLicense = "Driver's license number is required";
  if (!data.uberAccount) errors.uberAccount = "Uber account status is required";
  if (!data.vehiclePreference) errors.vehiclePreference = "Vehicle preference is required";
  if (!data.startDate) errors.startDate = "Desired start date is required";
  if (!data.referralSource) errors.referralSource = "Please tell us how you heard about us";

  // Password
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Terms
  if (!data.acceptTerms) {
    errors.acceptTerms = "You must accept the terms and conditions";
  }

  return errors;
}