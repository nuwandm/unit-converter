import { Converter } from "@/types/converter";

export const fluidsConverters: Converter[] = [
  // FLOW RATE CONVERTER
  {
    id: "flow-rate",
    name: "Flow Rate Converter",
    slug: "flow-rate",
    description: "Convert volumetric flow rate units: L/s, gpm, m³/h, and more",
    category: "fluids",
    baseUnit: "cubic-meter-per-second",
    units: [
      { id: "cubic-meter-per-second", name: "Cubic Meter per Second", symbol: "m³/s", type: "si" },
      { id: "cubic-meter-per-hour", name: "Cubic Meter per Hour", symbol: "m³/h", type: "si" },
      { id: "liter-per-second", name: "Liter per Second", symbol: "L/s", type: "si" },
      { id: "liter-per-minute", name: "Liter per Minute", symbol: "L/min", type: "si" },
      { id: "liter-per-hour", name: "Liter per Hour", symbol: "L/h", type: "si" },
      { id: "gallon-per-minute", name: "Gallon per Minute (US)", symbol: "gpm", type: "imperial" },
      { id: "gallon-per-hour", name: "Gallon per Hour (US)", symbol: "gph", type: "imperial" },
      { id: "cubic-foot-per-second", name: "Cubic Foot per Second", symbol: "ft³/s", type: "imperial" },
      { id: "cubic-foot-per-minute", name: "Cubic Foot per Minute", symbol: "ft³/min", type: "imperial" },
    ],
    formula: {
      type: "linear",
      factors: {
        "cubic-meter-per-second": 1,
        "cubic-meter-per-hour": 0.000277778,
        "liter-per-second": 0.001,
        "liter-per-minute": 0.0000166667,
        "liter-per-hour": 0.000000277778,
        "gallon-per-minute": 0.0000630902,
        "gallon-per-hour": 0.00000105150,
        "cubic-foot-per-second": 0.0283168,
        "cubic-foot-per-minute": 0.000471947,
      },
    },
    keywords: ["flow rate", "volumetric flow", "gpm", "L/s", "m3/h", "conversion"],
    metaTitle: "Flow Rate Converter | L/s, gpm, m³/h | Free Tool",
    metaDescription: "Convert flow rate units instantly. Liters per second, gallons per minute, cubic meters per hour, and more.",
  },

  // VISCOSITY CONVERTER
  {
    id: "viscosity",
    name: "Viscosity Converter",
    slug: "viscosity",
    description: "Convert dynamic and kinematic viscosity units",
    category: "fluids",
    baseUnit: "pascal-second",
    units: [
      { id: "pascal-second", name: "Pascal-second", symbol: "Pa·s", type: "si" },
      { id: "millipascal-second", name: "Millipascal-second", symbol: "mPa·s", type: "si" },
      { id: "poise", name: "Poise", symbol: "P", type: "cgs" },
      { id: "centipoise", name: "Centipoise", symbol: "cP", type: "cgs" },
      { id: "pound-per-foot-second", name: "Pound per Foot-Second", symbol: "lb/(ft·s)", type: "imperial" },
    ],
    formula: {
      type: "linear",
      factors: {
        "pascal-second": 1,
        "millipascal-second": 0.001,
        "poise": 0.1,
        "centipoise": 0.001,
        "pound-per-foot-second": 1.48816,
      },
    },
    keywords: ["viscosity", "dynamic viscosity", "pascal-second", "poise", "centipoise", "conversion"],
    metaTitle: "Viscosity Converter | Pa·s, P, cP | Free Tool",
    metaDescription: "Convert viscosity units instantly. Pascal-second, poise, centipoise, and more.",
  },
];
