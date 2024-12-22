"use client";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AVAILABLE_TIMES = [
  "09:00 AM - 11:00 AM",
  "11:00 AM - 01:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM"
] as const;

interface DeliveryDatePickerProps {
  selectedDate: Date | null;
  selectedTime: string;
  onDateChange: (date: Date | null) => void;
  onTimeChange: (time: string) => void;
}

export function DeliveryDatePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange
}: DeliveryDatePickerProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-lg font-semibold">Select Delivery Date</Label>
        <div className="mt-2">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateChange}
            disabled={(date) => 
              date < new Date() || // Past dates
              date.getDay() === 0 // Sundays
            }
            className="rounded-md border"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="time" className="text-lg font-semibold">Select Time Slot</Label>
        <Select value={selectedTime} onValueChange={onTimeChange}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Choose a time slot" />
          </SelectTrigger>
          <SelectContent>
            {AVAILABLE_TIMES.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}