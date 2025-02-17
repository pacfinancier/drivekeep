import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the public key
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Payment intent creation helper
export async function createPaymentIntent(amount: number) {
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  });
  return response.json();
}