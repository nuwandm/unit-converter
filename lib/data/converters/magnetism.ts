import { Converter } from "@/types/converter";

export const magnetismConverters: Converter[] = [
  // MAGNETIC FLUX CONVERTER
  {
    id: "magnetic-flux",
    name: "Magnetic Flux Converter",
    slug: "magnetic-flux",
    description: "Convert magnetic flux units: weber, maxwell, and more",
    category: "magnetism",
    baseUnit: "weber",
    units: [
      { id: "weber", name: "Weber", symbol: "Wb", type: "si" },
      { id: "milliweber", name: "Milliweber", symbol: "mWb", type: "si" },
      { id: "microweber", name: "Microweber", symbol: "μWb", type: "si" },
      { id: "maxwell", name: "Maxwell", symbol: "Mx", type: "cgs" },
      { id: "volt-second", name: "Volt-second", symbol: "V·s", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "weber": 1,
        "milliweber": 0.001,
        "microweber": 0.000001,
        "maxwell": 0.00000001,
        "volt-second": 1,
      },
    },
    keywords: ["magnetic flux", "weber", "maxwell", "conversion"],
    metaTitle: "Magnetic Flux Converter | Wb, Mx | Free Tool",
    metaDescription: "Convert magnetic flux units instantly. Weber, maxwell, and more.",
  },

  // MAGNETIC FIELD STRENGTH CONVERTER
  {
    id: "magnetic-field-strength",
    name: "Magnetic Field Strength Converter",
    slug: "magnetic-field-strength",
    description: "Convert magnetic field strength units: A/m, oersted, and more",
    category: "magnetism",
    baseUnit: "ampere-per-meter",
    units: [
      { id: "ampere-per-meter", name: "Ampere per Meter", symbol: "A/m", type: "si" },
      { id: "oersted", name: "Oersted", symbol: "Oe", type: "cgs" },
      { id: "ampere-turn-per-meter", name: "Ampere-turn per Meter", symbol: "At/m", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "ampere-per-meter": 1,
        "oersted": 79.5775,
        "ampere-turn-per-meter": 1,
      },
    },
    keywords: ["magnetic field strength", "ampere per meter", "oersted", "conversion"],
    metaTitle: "Magnetic Field Strength Converter | A/m, Oe | Free Tool",
    metaDescription: "Convert magnetic field strength units instantly. A/m, oersted, and more.",
  },
];
