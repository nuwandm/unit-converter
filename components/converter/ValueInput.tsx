"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";

interface ValueInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function ValueInput({ value, onChange, placeholder = "0" }: ValueInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Allow empty string, minus sign, decimal point, and valid numbers
    if (newValue === "" || newValue === "-" || newValue === "." || newValue === "-.") {
      onChange(newValue);
      return;
    }

    // Validate that it's a valid number (including scientific notation)
    const regex = /^-?\d*\.?\d*([eE][-+]?\d*)?$/;
    if (regex.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Input
      type="text"
      inputMode="decimal"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="text-lg"
    />
  );
}
