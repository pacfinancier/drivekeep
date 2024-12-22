export interface LoginFormData {
  email: string;
  password: string;
}

export function validateLoginForm(data: LoginFormData): string | null {
  if (!data.email) {
    return "Email is required";
  }

  if (!data.password) {
    return "Password is required";
  }

  if (!isValidEmail(data.email)) {
    return "Please enter a valid email address";
  }

  return null;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}