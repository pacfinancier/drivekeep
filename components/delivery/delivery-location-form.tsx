"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { STATES } from "@/lib/constants";
import type { DeliveryDetails } from "./types";

interface DeliveryLocationFormProps {
  details: DeliveryDetails;
  onChange: (details: DeliveryDetails) => void;
}

export function DeliveryLocationForm({ details, onChange }: DeliveryLocationFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Delivery Location</h3>

      <div className="space-y-4">
        <div>
          <Label htmlFor="address">Street Address</Label>
          <Input
            id="address"
            value={details.address}
            onChange={(e) => onChange({ ...details, address: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={details.city}
              onChange={(e) => onChange({ ...details, city: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select 
              value={details.state}
              onValueChange={(state) => onChange({ ...details, state })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                {STATES.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input
            id="zipCode"
            value={details.zipCode}
            onChange={(e) => onChange({ ...details, zipCode: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
          <Textarea
            id="instructions"
            placeholder="Add any special instructions for the delivery driver"
            value={details.instructions}
            onChange={(e) => onChange({ ...details, instructions: e.target.value })}
            className="h-24"
          />
        </div>
      </div>
    </div>
  );
}