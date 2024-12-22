"use client";

const BENEFITS = [
  {
    text: "Maximize your weekly earning potential",
    highlight: true
  },
  {
    text: "Premium vehicles at competitive rates"
  },
  {
    text: "Comprehensive insurance coverage"
  },
  {
    text: "24/7 support for drivers"
  }
] as const;

export function WhyChooseKeep() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Keep?</h2>
      <ul className="space-y-3">
        {BENEFITS.map((benefit) => (
          <li 
            key={benefit.text} 
            className={benefit.highlight ? 'text-blue-700 font-semibold' : 'text-blue-700'}
          >
            <span className="mr-2">•</span>
            {benefit.text}
          </li>
        ))}
      </ul>
    </div>
  );
}