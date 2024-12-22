"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { HelpArticle } from "./help-data";

interface HelpCategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  articles: HelpArticle[];
}

export function HelpCategoryCard({ title, description, icon: Icon, articles }: HelpCategoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {articles.map((article) => (
            <li key={article.title}>
              <Link 
                href={article.href} 
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}