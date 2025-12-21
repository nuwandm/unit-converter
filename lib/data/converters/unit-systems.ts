import { Converter } from "@/types/converter";

export const unitSystemsConverters: Converter[] = [
  // SI UNITS REFERENCE
  {
    id: "si-units",
    name: "SI Units Reference",
    slug: "si-units",
    description: "International System of Units (SI) reference guide",
    category: "unit-systems",
    baseUnit: "meter", // placeholder
    units: [
      { id: "meter", name: "Meter (length)", symbol: "m", type: "si" },
      { id: "kilogram", name: "Kilogram (mass)", symbol: "kg", type: "si" },
      { id: "second", name: "Second (time)", symbol: "s", type: "si" },
      { id: "ampere", name: "Ampere (current)", symbol: "A", type: "si" },
      { id: "kelvin", name: "Kelvin (temperature)", symbol: "K", type: "si" },
      { id: "mole", name: "Mole (amount)", symbol: "mol", type: "si" },
      { id: "candela", name: "Candela (luminous intensity)", symbol: "cd", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: { "meter": 1, "kilogram": 1, "second": 1, "ampere": 1, "kelvin": 1, "mole": 1, "candela": 1 },
    },
    keywords: ["SI units", "international system", "metric system", "base units"],
    metaTitle: "SI Units Reference | International System of Units",
    metaDescription: "Reference guide for SI base units: meter, kilogram, second, ampere, kelvin, mole, candela.",
    explanation: "The International System of Units (SI) is the modern form of the metric system. It comprises seven base units: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd).",
  },

  // IMPERIAL UNITS REFERENCE
  {
    id: "imperial-units",
    name: "Imperial Units Reference",
    slug: "imperial-units",
    description: "Imperial/US customary units reference guide",
    category: "unit-systems",
    baseUnit: "foot", // placeholder
    units: [
      { id: "inch", name: "Inch (length)", symbol: "in", type: "imperial" },
      { id: "foot", name: "Foot (length)", symbol: "ft", type: "imperial" },
      { id: "yard", name: "Yard (length)", symbol: "yd", type: "imperial" },
      { id: "mile", name: "Mile (length)", symbol: "mi", type: "imperial" },
      { id: "pound", name: "Pound (mass)", symbol: "lb", type: "imperial" },
      { id: "ounce", name: "Ounce (mass)", symbol: "oz", type: "imperial" },
      { id: "gallon", name: "Gallon (volume)", symbol: "gal", type: "imperial" },
      { id: "fahrenheit", name: "Fahrenheit (temperature)", symbol: "°F", type: "imperial" },
    ],
    formula: {
      type: "linear",
      factors: { "inch": 1, "foot": 1, "yard": 1, "mile": 1, "pound": 1, "ounce": 1, "gallon": 1, "fahrenheit": 1 },
    },
    keywords: ["imperial units", "US customary", "foot", "pound", "gallon"],
    metaTitle: "Imperial Units Reference | US Customary Units",
    metaDescription: "Reference guide for Imperial units: inch, foot, yard, mile, pound, ounce, gallon, Fahrenheit.",
    explanation: "Imperial units (also known as British Imperial or US Customary units) are primarily used in the United States. Common units include inch, foot, yard, mile (length), pound, ounce (mass), gallon (volume), and Fahrenheit (temperature).",
  },

  // CGS UNITS REFERENCE
  {
    id: "cgs-units",
    name: "CGS Units Reference",
    slug: "cgs-units",
    description: "Centimeter-Gram-Second (CGS) system reference guide",
    category: "unit-systems",
    baseUnit: "centimeter", // placeholder
    units: [
      { id: "centimeter", name: "Centimeter (length)", symbol: "cm", type: "cgs" },
      { id: "gram", name: "Gram (mass)", symbol: "g", type: "cgs" },
      { id: "second", name: "Second (time)", symbol: "s", type: "cgs" },
      { id: "dyne", name: "Dyne (force)", symbol: "dyn", type: "cgs" },
      { id: "erg", name: "Erg (energy)", symbol: "erg", type: "cgs" },
      { id: "poise", name: "Poise (viscosity)", symbol: "P", type: "cgs" },
      { id: "gauss", name: "Gauss (magnetic field)", symbol: "G", type: "cgs" },
    ],
    formula: {
      type: "linear",
      factors: { "centimeter": 1, "gram": 1, "second": 1, "dyne": 1, "erg": 1, "poise": 1, "gauss": 1 },
    },
    keywords: ["CGS units", "centimeter-gram-second", "dyne", "erg", "poise"],
    metaTitle: "CGS Units Reference | Centimeter-Gram-Second System",
    metaDescription: "Reference guide for CGS units: centimeter, gram, second, dyne, erg, poise, gauss.",
    explanation: "The CGS (Centimeter-Gram-Second) system is a variant of the metric system based on the centimeter, gram, and second. It's commonly used in physics and chemistry, particularly in older scientific literature.",
  },
];
