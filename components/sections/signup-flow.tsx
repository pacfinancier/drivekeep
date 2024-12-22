"use client";

import { ReadyToJoin } from "./signup-flow/ready-to-join";

export function SignupFlow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ReadyToJoin />
      </div>
    </section>
  );
}