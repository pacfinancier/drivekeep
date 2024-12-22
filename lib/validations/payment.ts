"use client";

export interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvc: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  deliveryZip: string;
}

export function validatePaymentForm(data: PaymentFormData): Partial<Record<keyof PaymentFormData, string>> {
  const errors: Partial<Record<keyof PaymentFormData, string>> = {};

  // Card number validation
  if (!data.cardNumber) {
    errors.cardNumber = "Card number is required";
  } else if (!/^\d{16}$/.test(data.cardNumber.replace(/\s/g, ''))) {
    errors.cardNumber = "Please enter a valid 16-digit card number";
  }

  // Expiry validation
  if (!data.expiry) {
    errors.expiry = "Expiry date is required";
  } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(data.expiry)) {
    errors.expiry = "Please enter a valid expiry date (MM/YY)";
  } else {
    const [month, year] = data.expiry.split('/');
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    if (expiry < new Date()) {
      errors.expiry = "Card has expired";
    }
  }

  // CVC validation
  if (!data.cvc) {
    errors.cvc = "CVC is required";
  } else if (!/^\d{3}$/.test(data.cvc)) {
    errors.cvc = "Please enter a valid 3-digit CVC";
  }

  // Personal information validation
  if (!data.firstName) errors.firstName = "First name is required";
  if (!data.lastName) errors.lastName = "Last name is required";
  if (!data.address) errors.address = "Address is required";
  if (!data.city) errors.city = "City is required";
  if (!data.state) errors.state = "State is required";

  // ZIP code validation
  if (!data.zipCode) {
    errors.zipCode = "ZIP code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
    errors.zipCode = "Please enter a valid ZIP code";
  }

  // Delivery ZIP validation
  if (!data.deliveryZip) {
    errors.deliveryZip = "Delivery ZIP code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(data.deliveryZip)) {
    errors.deliveryZip = "Please enter a valid delivery ZIP code";
  }

  return errors;
}