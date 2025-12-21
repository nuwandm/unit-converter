// Custom conversion formulas that cannot be expressed as simple linear or offset conversions

export const customFormulas: Record<string, (value: number, from: string, to: string) => number> = {
  "fuel-efficiency-volume": (value: number, from: string, to: string) => {
    // Convert to km/L first
    let kmPerL: number;

    if (from === "kilometer-per-liter") {
      kmPerL = value;
    } else if (from === "liter-per-100km") {
      kmPerL = 100 / value; // reciprocal conversion
    } else if (from === "mile-per-gallon-us") {
      kmPerL = value * 0.425144;
    } else if (from === "mile-per-gallon-uk") {
      kmPerL = value * 0.354006;
    } else {
      kmPerL = value;
    }

    // Convert from km/L to target unit
    if (to === "kilometer-per-liter") {
      return kmPerL;
    } else if (to === "liter-per-100km") {
      return 100 / kmPerL; // reciprocal conversion
    } else if (to === "mile-per-gallon-us") {
      return kmPerL / 0.425144;
    } else if (to === "mile-per-gallon-uk") {
      return kmPerL / 0.354006;
    }

    return kmPerL;
  },
};
