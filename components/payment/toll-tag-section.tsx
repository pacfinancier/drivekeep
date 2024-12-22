"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Info } from "lucide-react";

interface TollTagSectionProps {
  onToggle: (enabled: boolean) => void;
  enabled: boolean;
}

export function TollTagSection({ onToggle, enabled }: TollTagSectionProps) {
  return (
    <div className="space-y-4 border-t pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">Add Toll Tag Account</h4>
            <div className="relative group">
              <Info className="h-4 w-4 text-gray-400" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2 bg-gray-900 text-white text-sm rounded shadow-lg">
                Toll charges will be automatically billed to your account
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Save time and money with automatic toll payments
          </p>
        </div>
        <Switch
          checked={enabled}
          onCheckedChange={onToggle}
        />
      </div>
      
      {enabled && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            $25 monthly fee includes unlimited toll usage. Toll charges will be automatically processed.
          </p>
        </div>
      )}
    </div>
  );
}