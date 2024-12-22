import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ChatButton } from '@/components/chat/chat-button';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Keep - Premium Vehicles for Uber Drivers | BMW X5, Ford Edge, Jeep Wagoneer',
  description: 'Drive premium vehicles like BMW X5, Ford Edge, and Jeep Wagoneer for Uber. Maximize your earnings with our luxury fleet. Easy signup, comprehensive insurance, flexible hours.',
  keywords: 'uber premium vehicles, luxury uber cars, uber driver cars, BMW X5 uber, Ford Edge uber, Jeep Wagoneer uber',
  openGraph: {
    title: 'Keep - Premium Vehicles for Uber Drivers',
    description: 'Drive premium vehicles like BMW X5, Ford Edge, and Jeep Wagoneer for Uber. Maximize your earnings with our luxury fleet.',
    images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keep - Premium Vehicles for Uber Drivers',
    description: 'Drive premium vehicles like BMW X5, Ford Edge, and Jeep Wagoneer for Uber. Maximize your earnings with our luxury fleet.',
    images: ['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}