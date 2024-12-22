"use client";

import { HelpCategoryCard } from "./help-category-card";
import { HELP_CATEGORIES } from "./help-data";

export function HelpCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {HELP_CATEGORIES.map((category) => (
        <HelpCategoryCard key={category.title} {...category} />
      ))}
    </div>
  );
}