"use client";

import { Unit } from "@/types/unit";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface UnitSelectorProps {
  units: Unit[];
  value: string;
  onChange: (value: string) => void;
}

export function UnitSelector({ units, value, onChange }: UnitSelectorProps) {
  // Group units by type
  const groupedUnits = units.reduce((acc, unit) => {
    const type = unit.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(unit);
    return acc;
  }, {} as Record<string, Unit[]>);

  const typeLabels: Record<string, string> = {
    si: "SI Units",
    imperial: "Imperial Units",
    cgs: "CGS Units",
    other: "Other Units",
  };

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select unit" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(groupedUnits).map(([type, unitsInGroup]) => (
          <SelectGroup key={type}>
            <SelectLabel>{typeLabels[type] || "Units"}</SelectLabel>
            {unitsInGroup.map((unit) => (
              <SelectItem key={unit.id} value={unit.id}>
                <div className="flex items-center gap-2">
                  <span>{unit.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {unit.symbol}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
