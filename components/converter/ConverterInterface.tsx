"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Converter } from "@/types/converter";
import { ConversionEngine } from "@/lib/conversion/engine";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ConverterInterfaceProps {
  converter: Converter;
}

// Popular conversion pairs for quick access
const getPopularConversions = (converterId: string): { from: string; to: string; label: string }[] => {
  const popularMappings: Record<string, { from: string; to: string; label: string }[]> = {
    length: [
      { from: "meter", to: "foot", label: "m → ft" },
      { from: "kilometer", to: "mile", label: "km → mi" },
      { from: "centimeter", to: "inch", label: "cm → in" },
      { from: "mile", to: "kilometer", label: "mi → km" },
    ],
    weight: [
      { from: "kilogram", to: "pound", label: "kg → lb" },
      { from: "gram", to: "ounce", label: "g → oz" },
      { from: "pound", to: "kilogram", label: "lb → kg" },
      { from: "kilogram", to: "stone", label: "kg → st" },
    ],
    temperature: [
      { from: "celsius", to: "fahrenheit", label: "°C → °F" },
      { from: "fahrenheit", to: "celsius", label: "°F → °C" },
      { from: "celsius", to: "kelvin", label: "°C → K" },
      { from: "kelvin", to: "celsius", label: "K → °C" },
    ],
    volume: [
      { from: "liter", to: "gallon-us", label: "L → gal" },
      { from: "milliliter", to: "fluid-ounce-us", label: "mL → fl oz" },
      { from: "gallon-us", to: "liter", label: "gal → L" },
      { from: "cup-us", to: "milliliter", label: "cup → mL" },
    ],
    area: [
      { from: "square-meter", to: "square-foot", label: "m² → ft²" },
      { from: "hectare", to: "acre", label: "ha → ac" },
      { from: "square-kilometer", to: "square-mile", label: "km² → mi²" },
    ],
    speed: [
      { from: "kilometer-per-hour", to: "mile-per-hour", label: "km/h → mph" },
      { from: "meter-per-second", to: "kilometer-per-hour", label: "m/s → km/h" },
      { from: "mile-per-hour", to: "kilometer-per-hour", label: "mph → km/h" },
    ],
    pressure: [
      { from: "bar", to: "psi", label: "bar → psi" },
      { from: "pascal", to: "atmosphere", label: "Pa → atm" },
      { from: "psi", to: "bar", label: "psi → bar" },
    ],
    energy: [
      { from: "joule", to: "calorie", label: "J → cal" },
      { from: "kilowatt-hour", to: "joule", label: "kWh → J" },
      { from: "kilocalorie", to: "joule", label: "kcal → J" },
    ],
    power: [
      { from: "watt", to: "horsepower", label: "W → hp" },
      { from: "kilowatt", to: "horsepower", label: "kW → hp" },
      { from: "horsepower", to: "watt", label: "hp → W" },
    ],
  };
  return popularMappings[converterId] || [];
};

export function ConverterInterface({ converter }: ConverterInterfaceProps) {
  const [fromValue, setFromValue] = useState<string>("1");
  const [toValue, setToValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<string>(converter.units[0]?.id || "");
  const [toUnit, setToUnit] = useState<string>(converter.units[1]?.id || converter.units[0]?.id || "");

  // Animation states
  const [fromInputError, setFromInputError] = useState(false);
  const [toInputError, setToInputError] = useState(false);
  const [resultUpdated, setResultUpdated] = useState(false);
  const [fromResultUpdated, setFromResultUpdated] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [copiedFrom, setCopiedFrom] = useState(false);
  const [copiedTo, setCopiedTo] = useState(false);

  // Get popular conversions for this converter
  const popularConversions = useMemo(
    () => getPopularConversions(converter.id),
    [converter.id]
  );

  // Group units by type
  const groupedUnits = useMemo(() => {
    const groups: Record<string, typeof converter.units> = {
      si: [],
      imperial: [],
      cgs: [],
      other: [],
    };
    converter.units.forEach((unit) => {
      if (groups[unit.type]) {
        groups[unit.type].push(unit);
      } else {
        groups.other.push(unit);
      }
    });
    return groups;
  }, [converter.units]);

  // Perform conversion
  const performConversion = useCallback(
    (value: string, from: string, to: string): string => {
      if (!value || value === "" || value === "-" || value === ".") {
        return "";
      }

      const numValue = parseFloat(value);
      if (isNaN(numValue)) {
        return "";
      }

      try {
        const result = ConversionEngine.convert(numValue, from, to, converter.formula);
        const formatted = ConversionEngine.formatResult(result);
        return formatted.toString();
      } catch (error) {
        console.error("Conversion error:", error);
        return "Error";
      }
    },
    [converter.formula]
  );

  // Update toValue when fromValue, fromUnit, or toUnit changes
  useEffect(() => {
    const result = performConversion(fromValue, fromUnit, toUnit);
    setToValue(result);
    if (result && result !== "Error") {
      setResultUpdated(true);
      const timer = setTimeout(() => setResultUpdated(false), 300);
      return () => clearTimeout(timer);
    }
  }, [fromValue, fromUnit, toUnit, performConversion]);

  // Handle fromValue change
  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || newValue === "-" || newValue === "." || newValue === "-.") {
      setFromValue(newValue);
      return;
    }
    const regex = /^-?\d*\.?\d*([eE][-+]?\d*)?$/;
    if (regex.test(newValue)) {
      setFromValue(newValue);
    } else {
      // Invalid input - show shake animation
      setFromInputError(true);
      setTimeout(() => setFromInputError(false), 500);
    }
  };

  // Handle toValue change (reverse conversion)
  const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || newValue === "-" || newValue === "." || newValue === "-.") {
      setToValue(newValue);
      const result = performConversion("", toUnit, fromUnit);
      setFromValue(result);
      return;
    }
    const regex = /^-?\d*\.?\d*([eE][-+]?\d*)?$/;
    if (regex.test(newValue)) {
      setToValue(newValue);
      const result = performConversion(newValue, toUnit, fromUnit);
      setFromValue(result);
      setFromResultUpdated(true);
      setTimeout(() => setFromResultUpdated(false), 300);
    } else {
      // Invalid input - show shake animation
      setToInputError(true);
      setTimeout(() => setToInputError(false), 500);
    }
  };

  // Swap units with animation
  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setFromUnit(toUnit);
      setToUnit(fromUnit);
      setFromValue(toValue);
      setToValue(fromValue);
      setTimeout(() => setIsSwapping(false), 300);
    }, 150);
  };

  // Copy to clipboard functions
  const copyFromValue = async () => {
    if (fromValue) {
      await navigator.clipboard.writeText(`${fromValue} ${getUnitSymbol(fromUnit)}`);
      setCopiedFrom(true);
      setTimeout(() => setCopiedFrom(false), 2000);
    }
  };

  const copyToValue = async () => {
    if (toValue) {
      await navigator.clipboard.writeText(`${toValue} ${getUnitSymbol(toUnit)}`);
      setCopiedTo(true);
      setTimeout(() => setCopiedTo(false), 2000);
    }
  };

  // Get unit display text
  const getUnitDisplay = (unitId: string) => {
    const unit = converter.units.find((u) => u.id === unitId);
    return unit ? unit.name : unitId;
  };

  // Get unit symbol
  const getUnitSymbol = (unitId: string) => {
    const unit = converter.units.find((u) => u.id === unitId);
    return unit ? unit.symbol : "";
  };

  // Apply popular conversion
  const applyPopularConversion = (from: string, to: string) => {
    setFromUnit(from);
    setToUnit(to);
  };

  // Render unit select with grouping
  const renderUnitSelect = (
    value: string,
    onChange: (value: string) => void
  ) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full mb-4 border-0 text-sm font-medium text-gray-600 dark:text-gray-300 h-8 focus:ring-0 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="max-h-[300px]">
        {groupedUnits.si.length > 0 && (
          <SelectGroup>
            <SelectLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              SI / Metric
            </SelectLabel>
            {groupedUnits.si.map((unit) => (
              <SelectItem key={unit.id} value={unit.id} className="cursor-pointer">
                <div className="flex items-center justify-between w-full gap-3">
                  <span>{unit.name}</span>
                  <Badge variant="outline" className="text-xs font-mono">
                    {unit.symbol}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
        {groupedUnits.imperial.length > 0 && (
          <SelectGroup>
            <SelectLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Imperial / US
            </SelectLabel>
            {groupedUnits.imperial.map((unit) => (
              <SelectItem key={unit.id} value={unit.id} className="cursor-pointer">
                <div className="flex items-center justify-between w-full gap-3">
                  <span>{unit.name}</span>
                  <Badge variant="outline" className="text-xs font-mono">
                    {unit.symbol}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
        {groupedUnits.cgs.length > 0 && (
          <SelectGroup>
            <SelectLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              CGS
            </SelectLabel>
            {groupedUnits.cgs.map((unit) => (
              <SelectItem key={unit.id} value={unit.id} className="cursor-pointer">
                <div className="flex items-center justify-between w-full gap-3">
                  <span>{unit.name}</span>
                  <Badge variant="outline" className="text-xs font-mono">
                    {unit.symbol}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
        {groupedUnits.other.length > 0 && (
          <SelectGroup>
            <SelectLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Other
            </SelectLabel>
            {groupedUnits.other.map((unit) => (
              <SelectItem key={unit.id} value={unit.id} className="cursor-pointer">
                <div className="flex items-center justify-between w-full gap-3">
                  <span>{unit.name}</span>
                  <Badge variant="outline" className="text-xs font-mono">
                    {unit.symbol}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Google-style converter */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* From Section */}
        <div
          className={cn(
            "p-6 border-b border-gray-200 dark:border-gray-800 transition-colors",
            fromResultUpdated && "animate-highlight-pulse"
          )}
        >
          {renderUnitSelect(fromUnit, setFromUnit)}

          <div className="relative group">
            <input
              type="text"
              inputMode="decimal"
              value={fromValue}
              onChange={handleFromValueChange}
              className={cn(
                "w-full text-5xl font-light border-0 outline-none bg-transparent text-gray-900 dark:text-gray-50 placeholder:text-gray-300 dark:placeholder:text-gray-700 pr-24 transition-all",
                fromInputError && "animate-shake !text-red-500 dark:!text-red-400",
                fromResultUpdated && "animate-value-update"
              )}
              placeholder="0"
              aria-label={`Value in ${getUnitDisplay(fromUnit)}`}
            />
            {/* Unit symbol */}
            <span className="absolute right-12 top-1/2 -translate-y-1/2 text-2xl text-gray-400 dark:text-gray-500 font-light pointer-events-none">
              {getUnitSymbol(fromUnit)}
            </span>
            {/* Copy button */}
            <button
              onClick={copyFromValue}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all",
                copiedFrom && "opacity-100 animate-copy-success"
              )}
              aria-label="Copy value"
              title="Copy to clipboard"
            >
              {copiedFrom ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-5 z-10 relative">
          <button
            onClick={handleSwap}
            className={cn(
              "bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-primary transition-all shadow-md dark:shadow-xl hover:shadow-lg",
              isSwapping && "animate-swap-rotate"
            )}
            aria-label="Swap units"
            title="Swap units (Ctrl+S)"
          >
            <ArrowDownUp
              className={cn(
                "h-5 w-5 text-gray-600 dark:text-gray-300 transition-transform",
                isSwapping && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* To Section */}
        <div
          className={cn(
            "p-6 border-t border-gray-200 dark:border-gray-800 transition-colors",
            resultUpdated && "animate-highlight-pulse"
          )}
        >
          {renderUnitSelect(toUnit, setToUnit)}

          <div className="relative group">
            <input
              type="text"
              inputMode="decimal"
              value={toValue}
              onChange={handleToValueChange}
              className={cn(
                "w-full text-5xl font-light border-0 outline-none bg-transparent text-gray-900 dark:text-gray-50 placeholder:text-gray-300 dark:placeholder:text-gray-700 pr-24 transition-all",
                toInputError && "animate-shake !text-red-500 dark:!text-red-400",
                resultUpdated && "animate-value-update"
              )}
              placeholder="0"
              aria-label={`Value in ${getUnitDisplay(toUnit)}`}
            />
            {/* Unit symbol */}
            <span className="absolute right-12 top-1/2 -translate-y-1/2 text-2xl text-gray-400 dark:text-gray-500 font-light pointer-events-none">
              {getUnitSymbol(toUnit)}
            </span>
            {/* Copy button */}
            <button
              onClick={copyToValue}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all",
                copiedTo && "opacity-100 animate-copy-success"
              )}
              aria-label="Copy result"
              title="Copy to clipboard"
            >
              {copiedTo ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Copy className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Formula display */}
      <div className="mt-6 text-center">
        {fromValue && toValue ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl border border-blue-100 dark:border-blue-900 shadow-sm">
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">
              {fromValue}
            </span>
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {getUnitDisplay(fromUnit)}
            </span>
            <span className="text-lg font-bold text-gray-400 dark:text-gray-500 mx-1">=</span>
            <span className="text-lg font-semibold text-green-700 dark:text-green-300">
              {toValue}
            </span>
            <span className="text-sm text-green-600 dark:text-green-400">
              {getUnitDisplay(toUnit)}
            </span>
          </div>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium">
            Enter a value to see the conversion
          </p>
        )}
      </div>

      {/* Popular conversions - Quick access chips */}
      {popularConversions.length > 0 && (
        <div className="mt-6">
          <p className="text-xs text-center text-muted-foreground mb-3 uppercase tracking-wider font-medium">
            Popular Conversions
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularConversions.map((conv, index) => (
              <button
                key={index}
                onClick={() => applyPopularConversion(conv.from, conv.to)}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full border transition-all",
                  fromUnit === conv.from && toUnit === conv.to
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary/50"
                )}
              >
                {conv.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Keyboard shortcut hint */}
      <p className="mt-4 text-xs text-center text-muted-foreground">
        <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">
          Tab
        </kbd>{" "}
        to switch fields{" "}
        <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
        Hover to copy
      </p>

      {/* Screen reader announcement for result */}
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {toValue && `Result: ${toValue} ${getUnitDisplay(toUnit)}`}
      </div>
    </div>
  );
}
