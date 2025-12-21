import { Converter } from "@/types/converter";

export const electricityConverters: Converter[] = [
  // VOLTAGE CONVERTER
  {
    id: "voltage",
    name: "Voltage Converter",
    slug: "voltage",
    description: "Convert voltage units: volts, millivolts, kilovolts, and more",
    category: "electricity",
    baseUnit: "volt",
    units: [
      { id: "volt", name: "Volt", symbol: "V", type: "si" },
      { id: "kilovolt", name: "Kilovolt", symbol: "kV", type: "si" },
      { id: "millivolt", name: "Millivolt", symbol: "mV", type: "si" },
      { id: "microvolt", name: "Microvolt", symbol: "μV", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "volt": 1,
        "kilovolt": 1000,
        "millivolt": 0.001,
        "microvolt": 0.000001,
      },
    },
    keywords: ["voltage", "volt", "kilovolt", "millivolt", "conversion"],
    metaTitle: "Voltage Converter | V, kV, mV | Free Tool",
    metaDescription: "Convert voltage units instantly. Volts, kilovolts, millivolts, and more.",
  },

  // CURRENT CONVERTER
  {
    id: "current",
    name: "Current Converter",
    slug: "current",
    description: "Convert electric current units: amperes, milliamperes, kiloamperes, and more",
    category: "electricity",
    baseUnit: "ampere",
    units: [
      { id: "ampere", name: "Ampere", symbol: "A", type: "si" },
      { id: "kiloampere", name: "Kiloampere", symbol: "kA", type: "si" },
      { id: "milliampere", name: "Milliampere", symbol: "mA", type: "si" },
      { id: "microampere", name: "Microampere", symbol: "μA", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "ampere": 1,
        "kiloampere": 1000,
        "milliampere": 0.001,
        "microampere": 0.000001,
      },
    },
    keywords: ["current", "ampere", "milliampere", "electric current", "conversion"],
    metaTitle: "Current Converter | A, kA, mA | Free Tool",
    metaDescription: "Convert electric current units instantly. Amperes, kiloamperes, milliamperes, and more.",
  },

  // RESISTANCE CONVERTER
  {
    id: "resistance",
    name: "Resistance Converter",
    slug: "resistance",
    description: "Convert electrical resistance units: ohms, kilohms, megohms, and more",
    category: "electricity",
    baseUnit: "ohm",
    units: [
      { id: "ohm", name: "Ohm", symbol: "Ω", type: "si" },
      { id: "kiloohm", name: "Kiloohm", symbol: "kΩ", type: "si" },
      { id: "megohm", name: "Megohm", symbol: "MΩ", type: "si" },
      { id: "milliohm", name: "Milliohm", symbol: "mΩ", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "ohm": 1,
        "kiloohm": 1000,
        "megohm": 1000000,
        "milliohm": 0.001,
      },
    },
    keywords: ["resistance", "ohm", "kilohm", "megohm", "conversion"],
    metaTitle: "Resistance Converter | Ω, kΩ, MΩ | Free Tool",
    metaDescription: "Convert electrical resistance units instantly. Ohms, kiloohms, megohms, and more.",
  },

  // CAPACITANCE CONVERTER
  {
    id: "capacitance",
    name: "Capacitance Converter",
    slug: "capacitance",
    description: "Convert capacitance units: farads, microfarads, picofarads, and more",
    category: "electricity",
    baseUnit: "farad",
    units: [
      { id: "farad", name: "Farad", symbol: "F", type: "si" },
      { id: "millifarad", name: "Millifarad", symbol: "mF", type: "si" },
      { id: "microfarad", name: "Microfarad", symbol: "μF", type: "si" },
      { id: "nanofarad", name: "Nanofarad", symbol: "nF", type: "si" },
      { id: "picofarad", name: "Picofarad", symbol: "pF", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "farad": 1,
        "millifarad": 0.001,
        "microfarad": 0.000001,
        "nanofarad": 0.000000001,
        "picofarad": 0.000000000001,
      },
    },
    keywords: ["capacitance", "farad", "microfarad", "picofarad", "conversion"],
    metaTitle: "Capacitance Converter | F, μF, pF | Free Tool",
    metaDescription: "Convert capacitance units instantly. Farads, microfarads, picofarads, and more.",
  },

  // INDUCTANCE CONVERTER
  {
    id: "inductance",
    name: "Inductance Converter",
    slug: "inductance",
    description: "Convert inductance units: henries, millihenries, microhenries, and more",
    category: "electricity",
    baseUnit: "henry",
    units: [
      { id: "henry", name: "Henry", symbol: "H", type: "si" },
      { id: "millihenry", name: "Millihenry", symbol: "mH", type: "si" },
      { id: "microhenry", name: "Microhenry", symbol: "μH", type: "si" },
      { id: "nanohenry", name: "Nanohenry", symbol: "nH", type: "si" },
    ],
    formula: {
      type: "linear",
      factors: {
        "henry": 1,
        "millihenry": 0.001,
        "microhenry": 0.000001,
        "nanohenry": 0.000000001,
      },
    },
    keywords: ["inductance", "henry", "millihenry", "microhenry", "conversion"],
    metaTitle: "Inductance Converter | H, mH, μH | Free Tool",
    metaDescription: "Convert inductance units instantly. Henries, millihenries, microhenries, and more.",
  },
];
