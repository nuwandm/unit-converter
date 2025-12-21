import { Converter } from "@/types/converter";

export const lightConverters: Converter[] = [
  // LUMINANCE CONVERTER
  {
    id: "luminance",
    name: "Luminance Converter",
    slug: "luminance",
    description: "Convert luminance units: cd/m², nit, lambert, and more",
    category: "light",
    baseUnit: "candela-per-square-meter",
    units: [
      { id: "candela-per-square-meter", name: "Candela per Square Meter", symbol: "cd/m²", type: "si" },
      { id: "nit", name: "Nit", symbol: "nt", type: "si" },
      { id: "stilb", name: "Stilb", symbol: "sb", type: "cgs" },
      { id: "lambert", name: "Lambert", symbol: "L", type: "cgs" },
      { id: "foot-lambert", name: "Foot-Lambert", symbol: "fL", type: "imperial" },
      { id: "candela-per-square-foot", name: "Candela per Square Foot", symbol: "cd/ft²", type: "imperial" },
    ],
    formula: {
      type: "linear",
      factors: {
        "candela-per-square-meter": 1,
        "nit": 1,
        "stilb": 10000,
        "lambert": 3183.1,
        "foot-lambert": 3.42626,
        "candela-per-square-foot": 10.7639,
      },
    },
    keywords: ["luminance", "brightness", "cd/m2", "nit", "lambert", "conversion"],
    metaTitle: "Luminance Converter | cd/m², nit, fL | Free Tool",
    metaDescription: "Convert luminance units instantly. cd/m², nit, foot-lambert, and more.",
  },

  // ILLUMINANCE CONVERTER
  {
    id: "illuminance",
    name: "Illuminance Converter",
    slug: "illuminance",
    description: "Convert illuminance units: lux, lumen per square meter, foot-candle, and more",
    category: "light",
    baseUnit: "lux",
    units: [
      { id: "lux", name: "Lux", symbol: "lx", type: "si" },
      { id: "lumen-per-square-meter", name: "Lumen per Square Meter", symbol: "lm/m²", type: "si" },
      { id: "foot-candle", name: "Foot-candle", symbol: "fc", type: "imperial" },
      { id: "lumen-per-square-foot", name: "Lumen per Square Foot", symbol: "lm/ft²", type: "imperial" },
      { id: "phot", name: "Phot", symbol: "ph", type: "cgs" },
    ],
    formula: {
      type: "linear",
      factors: {
        "lux": 1,
        "lumen-per-square-meter": 1,
        "foot-candle": 10.7639,
        "lumen-per-square-foot": 10.7639,
        "phot": 10000,
      },
    },
    keywords: ["illuminance", "light intensity", "lux", "foot-candle", "lumen", "conversion"],
    metaTitle: "Illuminance Converter | Lux, Foot-candle, lm/m² | Free Tool",
    metaDescription: "Convert illuminance units instantly. Lux, foot-candle, lumen per square meter, and more.",
  },
];
