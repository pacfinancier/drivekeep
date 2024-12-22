export interface RegistrationFormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  earningLevel: string;
}

export function validateRegistrationForm(data: RegistrationFormData): string | null {
  if (!data.email || !isValidEmail(data.email)) {
    return "Please enter a valid email address";
  }

  if (!data.password || data.password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!data.firstName || !data.lastName) {
    return "Please enter your full name";
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    return "Please enter a valid phone number";
  }

  if (!data.earningLevel) {
    return "Please select an earning level";
  }

  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone);
}