import { Converter } from "@/types/converter";

export const heatConverters: Converter[] = [
  // FUEL EFFICIENCY (MASS)
  {
    id: "fuel-efficiency-mass",
    name: "Fuel Efficiency (Mass) Converter",
    slug: "fuel-efficiency-mass",
    description:
      "Convert fuel efficiency by mass: miles per pound, km per kg, etc.",
    category: "heat",
    baseUnit: "kilometer-per-kilogram",
    units: [
      {
        id: "kilometer-per-kilogram",
        name: "Kilometer per Kilogram",
        symbol: "km/kg",
        type: "si",
      },
      {
        id: "meter-per-kilogram",
        name: "Meter per Kilogram",
        symbol: "m/kg",
        type: "si",
      },
      {
        id: "mile-per-pound",
        name: "Mile per Pound",
        symbol: "mi/lb",
        type: "imperial",
      },
      {
        id: "kilometer-per-pound",
        name: "Kilometer per Pound",
        symbol: "km/lb",
        type: "other",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "kilometer-per-kilogram": 1,
        "meter-per-kilogram": 0.001,
        "mile-per-pound": 3.5481,
        "kilometer-per-pound": 2.20462,
      },
    },
    keywords: ["fuel efficiency", "miles per pound", "km per kg", "conversion"],
    metaTitle: "Fuel Efficiency (Mass) Converter | km/kg to mi/lb",
    metaDescription:
      "Convert fuel efficiency by mass units. km/kg, mi/lb, and more.",
  },

  // FUEL EFFICIENCY (VOLUME)
  {
    id: "fuel-efficiency-volume",
    name: "Fuel Efficiency (Volume) Converter",
    slug: "fuel-efficiency-volume",
    description: "Convert fuel efficiency by volume: MPG, L/100km, km/L, etc.",
    category: "heat",
    baseUnit: "kilometer-per-liter",
    units: [
      {
        id: "kilometer-per-liter",
        name: "Kilometer per Liter",
        symbol: "km/L",
        type: "si",
      },
      {
        id: "liter-per-100km",
        name: "Liter per 100 km",
        symbol: "L/100km",
        type: "si",
      },
      {
        id: "mile-per-gallon-us",
        name: "Mile per Gallon (US)",
        symbol: "mpg (US)",
        type: "imperial",
      },
      {
        id: "mile-per-gallon-uk",
        name: "Mile per Gallon (UK)",
        symbol: "mpg (UK)",
        type: "imperial",
      },
    ],
    formula: {
      type: "custom",
      customFormulaId: "fuel-efficiency-volume",
    },
    keywords: [
      "fuel efficiency",
      "mpg",
      "L/100km",
      "km/L",
      "miles per gallon",
      "conversion",
    ],
    metaTitle: "Fuel Efficiency Converter | MPG to L/100km",
    metaDescription:
      "Convert fuel efficiency units. MPG, L/100km, km/L, and more. Accurate fuel economy converter.",
  },

  // TEMPERATURE INTERVAL
  {
    id: "temperature-interval",
    name: "Temperature Interval Converter",
    slug: "temperature-interval",
    description: "Convert temperature differences and intervals",
    category: "heat",
    baseUnit: "kelvin-interval",
    units: [
      {
        id: "kelvin-interval",
        name: "Kelvin Interval",
        symbol: "K",
        type: "si",
      },
      {
        id: "celsius-interval",
        name: "Celsius Interval",
        symbol: "°C",
        type: "si",
      },
      {
        id: "fahrenheit-interval",
        name: "Fahrenheit Interval",
        symbol: "°F",
        type: "imperial",
      },
      {
        id: "rankine-interval",
        name: "Rankine Interval",
        symbol: "°R",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "kelvin-interval": 1,
        "celsius-interval": 1,
        "fahrenheit-interval": 0.555556,
        "rankine-interval": 0.555556,
      },
    },
    keywords: [
      "temperature interval",
      "temperature difference",
      "kelvin",
      "celsius",
      "conversion",
    ],
    metaTitle: "Temperature Interval Converter | K, °C, °F Intervals",
    metaDescription:
      "Convert temperature intervals and differences. Kelvin, Celsius, Fahrenheit intervals.",
  },

  // THERMAL EXPANSION
  {
    id: "thermal-expansion",
    name: "Thermal Expansion Converter",
    slug: "thermal-expansion",
    description: "Convert thermal expansion coefficients",
    category: "heat",
    baseUnit: "per-kelvin",
    units: [
      { id: "per-kelvin", name: "per Kelvin", symbol: "1/K", type: "si" },
      { id: "per-celsius", name: "per Celsius", symbol: "1/°C", type: "si" },
      {
        id: "per-fahrenheit",
        name: "per Fahrenheit",
        symbol: "1/°F",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "per-kelvin": 1,
        "per-celsius": 1,
        "per-fahrenheit": 0.555556,
      },
    },
    keywords: ["thermal expansion", "expansion coefficient", "conversion"],
    metaTitle: "Thermal Expansion Converter | 1/K to 1/°C",
    metaDescription:
      "Convert thermal expansion coefficients. Per kelvin, per celsius, per fahrenheit.",
  },

  // THERMAL RESISTANCE
  {
    id: "thermal-resistance",
    name: "Thermal Resistance Converter",
    slug: "thermal-resistance",
    description: "Convert thermal resistance units (R-value)",
    category: "heat",
    baseUnit: "kelvin-per-watt",
    units: [
      {
        id: "kelvin-per-watt",
        name: "Kelvin per Watt",
        symbol: "K/W",
        type: "si",
      },
      {
        id: "celsius-per-watt",
        name: "Celsius per Watt",
        symbol: "°C/W",
        type: "si",
      },
      {
        id: "hour-sqft-fahrenheit-per-btu",
        name: "Hour·ft²·°F per BTU",
        symbol: "h·ft²·°F/BTU",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "kelvin-per-watt": 1,
        "celsius-per-watt": 1,
        "hour-sqft-fahrenheit-per-btu": 5.67826,
      },
    },
    keywords: ["thermal resistance", "R-value", "insulation", "conversion"],
    metaTitle: "Thermal Resistance Converter | K/W to R-value",
    metaDescription:
      "Convert thermal resistance units. K/W, R-value, and more. Insulation converter.",
  },

  // THERMAL CONDUCTIVITY
  {
    id: "thermal-conductivity",
    name: "Thermal Conductivity Converter",
    slug: "thermal-conductivity",
    description:
      "Convert thermal conductivity units like W/(m·K), BTU/(hr·ft·°F)",
    category: "heat",
    baseUnit: "watt-per-meter-kelvin",
    units: [
      {
        id: "watt-per-meter-kelvin",
        name: "Watt per Meter-Kelvin",
        symbol: "W/(m·K)",
        type: "si",
      },
      {
        id: "watt-per-meter-celsius",
        name: "Watt per Meter-Celsius",
        symbol: "W/(m·°C)",
        type: "si",
      },
      {
        id: "btu-per-hour-foot-fahrenheit",
        name: "BTU per Hour-Foot-Fahrenheit",
        symbol: "BTU/(hr·ft·°F)",
        type: "imperial",
      },
      {
        id: "calorie-per-second-cm-celsius",
        name: "Calorie per Second-cm-Celsius",
        symbol: "cal/(s·cm·°C)",
        type: "cgs",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "watt-per-meter-kelvin": 1,
        "watt-per-meter-celsius": 1,
        "btu-per-hour-foot-fahrenheit": 1.73073,
        "calorie-per-second-cm-celsius": 418.68,
      },
    },
    keywords: [
      "thermal conductivity",
      "heat transfer",
      "W/mK",
      "BTU conversion",
    ],
    metaTitle: "Thermal Conductivity Converter | W/(m·K) to BTU/(hr·ft·°F)",
    metaDescription:
      "Convert thermal conductivity units. W/(m·K), BTU/(hr·ft·°F), and more.",
  },

  // SPECIFIC HEAT CAPACITY
  {
    id: "specific-heat-capacity",
    name: "Specific Heat Capacity Converter",
    slug: "specific-heat-capacity",
    description: "Convert specific heat capacity units",
    category: "heat",
    baseUnit: "joule-per-kilogram-kelvin",
    units: [
      {
        id: "joule-per-kilogram-kelvin",
        name: "Joule per Kilogram-Kelvin",
        symbol: "J/(kg·K)",
        type: "si",
      },
      {
        id: "joule-per-kilogram-celsius",
        name: "Joule per Kilogram-Celsius",
        symbol: "J/(kg·°C)",
        type: "si",
      },
      {
        id: "kilojoule-per-kilogram-kelvin",
        name: "Kilojoule per Kilogram-Kelvin",
        symbol: "kJ/(kg·K)",
        type: "si",
      },
      {
        id: "calorie-per-gram-celsius",
        name: "Calorie per Gram-Celsius",
        symbol: "cal/(g·°C)",
        type: "cgs",
      },
      {
        id: "btu-per-pound-fahrenheit",
        name: "BTU per Pound-Fahrenheit",
        symbol: "BTU/(lb·°F)",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "joule-per-kilogram-kelvin": 1,
        "joule-per-kilogram-celsius": 1,
        "kilojoule-per-kilogram-kelvin": 1000,
        "calorie-per-gram-celsius": 4186.8,
        "btu-per-pound-fahrenheit": 4186.8,
      },
    },
    keywords: [
      "specific heat capacity",
      "heat capacity",
      "J/kg·K",
      "conversion",
    ],
    metaTitle: "Specific Heat Capacity Converter | J/(kg·K) to BTU/(lb·°F)",
    metaDescription:
      "Convert specific heat capacity units. J/(kg·K), cal/(g·°C), BTU/(lb·°F), and more.",
  },

  // HEAT DENSITY
  {
    id: "heat-density",
    name: "Heat Density Converter",
    slug: "heat-density",
    description: "Convert heat density (energy per volume) units",
    category: "heat",
    baseUnit: "joule-per-cubic-meter",
    units: [
      {
        id: "joule-per-cubic-meter",
        name: "Joule per Cubic Meter",
        symbol: "J/m³",
        type: "si",
      },
      {
        id: "kilojoule-per-cubic-meter",
        name: "Kilojoule per Cubic Meter",
        symbol: "kJ/m³",
        type: "si",
      },
      {
        id: "calorie-per-cubic-centimeter",
        name: "Calorie per Cubic Centimeter",
        symbol: "cal/cm³",
        type: "cgs",
      },
      {
        id: "btu-per-cubic-foot",
        name: "BTU per Cubic Foot",
        symbol: "BTU/ft³",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "joule-per-cubic-meter": 1,
        "kilojoule-per-cubic-meter": 1000,
        "calorie-per-cubic-centimeter": 4186800,
        "btu-per-cubic-foot": 37259,
      },
    },
    keywords: ["heat density", "energy density", "J/m3", "conversion"],
    metaTitle: "Heat Density Converter | J/m³ to BTU/ft³",
    metaDescription:
      "Convert heat density units. J/m³, kJ/m³, BTU/ft³, and more.",
  },

  // HEAT FLUX DENSITY
  {
    id: "heat-flux-density",
    name: "Heat Flux Density Converter",
    slug: "heat-flux-density",
    description: "Convert heat flux density units",
    category: "heat",
    baseUnit: "watt-per-square-meter",
    units: [
      {
        id: "watt-per-square-meter",
        name: "Watt per Square Meter",
        symbol: "W/m²",
        type: "si",
      },
      {
        id: "kilowatt-per-square-meter",
        name: "Kilowatt per Square Meter",
        symbol: "kW/m²",
        type: "si",
      },
      {
        id: "calorie-per-second-square-cm",
        name: "Calorie per Second-Square cm",
        symbol: "cal/(s·cm²)",
        type: "cgs",
      },
      {
        id: "btu-per-hour-square-foot",
        name: "BTU per Hour-Square Foot",
        symbol: "BTU/(hr·ft²)",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "watt-per-square-meter": 1,
        "kilowatt-per-square-meter": 1000,
        "calorie-per-second-square-cm": 41868,
        "btu-per-hour-square-foot": 3.15459,
      },
    },
    keywords: ["heat flux density", "heat flux", "W/m2", "conversion"],
    metaTitle: "Heat Flux Density Converter | W/m² to BTU/(hr·ft²)",
    metaDescription:
      "Convert heat flux density units. W/m², BTU/(hr·ft²), and more.",
  },

  // HEAT TRANSFER COEFFICIENT
  {
    id: "heat-transfer-coefficient",
    name: "Heat Transfer Coefficient Converter",
    slug: "heat-transfer-coefficient",
    description: "Convert heat transfer coefficient units",
    category: "heat",
    baseUnit: "watt-per-square-meter-kelvin",
    units: [
      {
        id: "watt-per-square-meter-kelvin",
        name: "Watt per Square Meter-Kelvin",
        symbol: "W/(m²·K)",
        type: "si",
      },
      {
        id: "watt-per-square-meter-celsius",
        name: "Watt per Square Meter-Celsius",
        symbol: "W/(m²·°C)",
        type: "si",
      },
      {
        id: "calorie-per-second-square-cm-celsius",
        name: "Calorie per Second-Square cm-Celsius",
        symbol: "cal/(s·cm²·°C)",
        type: "cgs",
      },
      {
        id: "btu-per-hour-square-foot-fahrenheit",
        name: "BTU per Hour-Square Foot-Fahrenheit",
        symbol: "BTU/(hr·ft²·°F)",
        type: "imperial",
      },
    ],
    formula: {
      type: "linear",
      factors: {
        "watt-per-square-meter-kelvin": 1,
        "watt-per-square-meter-celsius": 1,
        "calorie-per-second-square-cm-celsius": 41868,
        "btu-per-hour-square-foot-fahrenheit": 5.67826,
      },
    },
    keywords: [
      "heat transfer coefficient",
      "convection coefficient",
      "W/m2·K",
      "conversion",
    ],
    metaTitle:
      "Heat Transfer Coefficient Converter | W/(m²·K) to BTU/(hr·ft²·°F)",
    metaDescription:
      "Convert heat transfer coefficient units. W/(m²·K), BTU/(hr·ft²·°F), and more.",
  },
];
