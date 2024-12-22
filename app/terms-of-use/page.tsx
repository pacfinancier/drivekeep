"use client";

import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 space-y-8">
          <div className="border-b pb-6">
            <h1 className="text-4xl font-bold text-gray-900">Keep Terms of Use</h1>
            <p className="text-gray-500 mt-2">Last updated: 21 December 2024</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Intellectual Property Ownership</h2>
            <p className="text-gray-600 leading-relaxed">
              All information, data, software, photographs, graphics, videos, text, images, typefaces, sounds, logos, and other material, including but not limited to the selection, coordination, arrangement, and enhancement of such content, contained on any Keep Service is owned, controlled, or licensed by or to Keep, and is protected by trade dress, copyright, patent, trademark, and other intellectual property rights and laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Restrictions on Use</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not use the Keep name, any related logos or trademarks, or any of the content described above without the express written consent of Keep. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Reproducing, distributing, or displaying any Keep content.</li>
              <li>Using any Keep trademarks or logos in connection with any product or service that is not affiliated with Keep.</li>
              <li>Using any Keep content in a manner that could damage, disparage, or otherwise harm Keep's reputation or goodwill.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Enforcement</h2>
            <p className="text-gray-600 leading-relaxed">
              Keep takes the protection of its intellectual property rights very seriously. Any unauthorized use of Keep's intellectual property will be investigated and appropriate legal action will be taken.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Delivery Timeframe</h2>
            <p className="text-gray-600 leading-relaxed">
              Please note that delivery of vehicles is expected within 2-4 weeks from the date of your completed transaction. 
              This timeframe allows for necessary processing of tax, title, license, and any applicable fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Money-Back Guarantee</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer a money-back guarantee on all vehicle rentals and purchases. If you are not satisfied with your 
              vehicle for any reason, you may return it for a full refund, subject to the terms and conditions of our 
              rental/purchase agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Deposit Amounts</h2>
            <p className="text-gray-600 leading-relaxed">
              A deposit is required to secure your vehicle rental or purchase. The deposit amount varies based on the 
              vehicle category:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Economy: $99</li>
              <li>Comfort: $149</li>
              <li>Luxury: $249</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Additional Terms and Conditions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>All rentals and purchases are subject to our standard terms and conditions, which are available on our 
                website and will be provided to you at the time of your transaction.</li>
              <li>Prices are subject to change without notice.</li>
              <li>Vehicle availability may vary depending on location and season.</li>
              <li>Additional fees may apply for optional services such as insurance, roadside assistance, and GPS.</li>
            </ul>
            <p className="text-gray-600">
              Please review our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                privacy policy
              </Link>{" "}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns, please do not hesitate to contact us at{" "}
              <Link href="mailto:support@drivekeep.com" className="text-blue-600 hover:text-blue-700">
                support@drivekeep.com
              </Link>
            </p>
          </section>

          <p className="text-gray-600 italic">
            Thank you for choosing Keep for your vehicle rental or purchase needs.
          </p>
        </div>
      </div>
    </div>
  );
}