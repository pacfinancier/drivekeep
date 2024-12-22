"use client";

import { SignupForm } from "./signup-form";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto">
      {/* iPhone Frame */}
      <div className="relative w-[320px] h-[650px] bg-black rounded-[50px] p-[12px] shadow-xl">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[18px] z-20" />
        
        {/* Screen Border */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden border-[3px] border-black bg-white">
          {/* Status Bar */}
          <div className="h-[48px] bg-white" />
          
          {/* Main Content */}
          <div className="h-full w-full bg-gray-50 overflow-hidden">
            <SignupForm />
          </div>
        </div>

        {/* Side Button */}
        <div className="absolute right-[-2px] top-[120px] w-[3px] h-[30px] bg-gray-700 rounded-l" />
        
        {/* Volume Buttons */}
        <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-gray-700 rounded-r" />
        <div className="absolute left-[-2px] top-[170px] w-[3px] h-[60px] bg-gray-700 rounded-r" />
      </div>
    </div>
  );
}