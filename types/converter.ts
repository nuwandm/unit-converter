import { Unit } from "./unit";

export type FormulaType = 'linear' | 'offset' | 'custom';

export interface ConversionFormula {
  type: FormulaType;
  // For linear conversions: value * factors[fromUnit] / factors[toUnit]
  factors?: Record<string, number>;
  // For offset conversions (temperature): (value - offsets[from]) * factors[from]
  offsets?: Record<string, number>;
  // For custom conversions: provide a function ID
  customFormulaId?: string;
}

export interface Converter {
  id: string;                    // e.g., "length", "thermal-conductivity"
  name: string;                  // e.g., "Length Converter"
  slug: string;                  // e.g., "length", "thermal-conductivity"
  description: string;           // SEO description
  category: string;              // Category ID (e.g., "common", "heat")
  units: Unit[];                 // Available units for this converter
  baseUnit: string;              // Base unit ID for conversion
  formula: ConversionFormula;    // Conversion logic
  keywords: string[];            // SEO keywords
  metaTitle?: string;            // Custom meta title (optional)
  metaDescription?: string;      // Custom meta description (optional)
  explanation?: string;          // Explanation of the conversion (optional)
}
