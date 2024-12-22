"use client";

import Link from "next/link";
import { Button } from "./button";
import { ButtonProps } from "@/components/ui/button";

interface GetStartedButtonProps extends Omit<ButtonProps, "children"> {
  className?: string;
}

export function GetStartedButton({ className, ...props }: GetStartedButtonProps) {
  return (
    <Link href="/get-started">
      <Button 
        size="lg" 
        className={`bg-blue-600 hover:bg-blue-700 text-white ${className}`}
        {...props}
      >
        Get Started
      </Button>
    </Link>
  );
}