"use client";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): string | null {
  if (!data.name.trim()) {
    return "Name is required";
  }

  if (!data.email.trim()) {
    return "Email is required";
  }

  if (!isValidEmail(data.email)) {
    return "Please enter a valid email address";
  }

  if (!data.subject.trim()) {
    return "Subject is required";
  }

  if (!data.message.trim()) {
    return "Message is required";
  }

  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}