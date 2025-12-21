import { ConversionFormula } from "@/types/converter";
import { customFormulas } from "./custom-formulas";

/**
 * Core conversion engine for all unit conversions
 * Supports linear, offset, and custom conversion formulas
 */
export class ConversionEngine {
  /**
   * Main conversion function
   * Strategy:
   * 1. Convert from source unit to base unit
   * 2. Convert from base unit to target unit
   *
   * @param value - The numeric value to convert
   * @param fromUnit - Source unit ID
   * @param toUnit - Target unit ID
   * @param formula - Conversion formula definition
   * @returns Converted value
   */
  static convert(
    value: number,
    fromUnit: string,
    toUnit: string,
    formula: ConversionFormula
  ): number {
    // If units are the same, no conversion needed
    if (fromUnit === toUnit) {
      return value;
    }

    // Handle invalid input
    if (isNaN(value) || !isFinite(value)) {
      return NaN;
    }

    switch (formula.type) {
      case 'linear':
        return this.convertLinear(value, fromUnit, toUnit, formula.factors || {});

      case 'offset':
        return this.convertOffset(
          value,
          fromUnit,
          toUnit,
          formula.factors || {},
          formula.offsets || {}
        );

      case 'custom':
        if (!formula.customFormulaId) {
          throw new Error('Custom formula ID is required for custom formula type');
        }
        const customFormula = customFormulas[formula.customFormulaId];
        if (!customFormula) {
          throw new Error(`Custom formula not found: ${formula.customFormulaId}`);
        }
        return customFormula(value, fromUnit, toUnit);

      default:
        throw new Error(`Unsupported formula type: ${formula.type}`);
    }
  }

  /**
   * Linear conversion (most common)
   * Formula: value * factors[fromUnit] / factors[toUnit]
   * Example: meters to feet
   *
   * @param value - Value to convert
   * @param from - Source unit ID
   * @param to - Target unit ID
   * @param factors - Conversion factors (unit ID -> factor relative to base unit)
   * @returns Converted value
   */
  private static convertLinear(
    value: number,
    from: string,
    to: string,
    factors: Record<string, number>
  ): number {
    const fromFactor = factors[from];
    const toFactor = factors[to];

    if (fromFactor === undefined || toFactor === undefined) {
      throw new Error(`Missing conversion factor for ${from} or ${to}`);
    }

    // Convert to base unit, then to target unit
    const baseValue = value * fromFactor;
    return baseValue / toFactor;
  }

  /**
   * Offset conversion (for temperatures and similar)
   * Formula: ((value - offsets[from]) * factors[from] / factors[to]) + offsets[to]
   * Example: Celsius to Fahrenheit
   *
   * @param value - Value to convert
   * @param from - Source unit ID
   * @param to - Target unit ID
   * @param factors - Conversion factors
   * @param offsets - Offset values for each unit
   * @returns Converted value
   */
  private static convertOffset(
    value: number,
    from: string,
    to: string,
    factors: Record<string, number>,
    offsets: Record<string, number>
  ): number {
    const fromFactor = factors[from];
    const toFactor = factors[to];
    const fromOffset = offsets[from] || 0;
    const toOffset = offsets[to] || 0;

    if (fromFactor === undefined || toFactor === undefined) {
      throw new Error(`Missing conversion factor for ${from} or ${to}`);
    }

    // Step 1: Convert to base unit (e.g., Kelvin for temperature)
    const baseValue = (value - fromOffset) * fromFactor;

    // Step 2: Convert from base unit to target unit
    return (baseValue / toFactor) + toOffset;
  }

  /**
   * Format a number to a reasonable precision
   * Removes trailing zeros and limits decimal places
   *
   * @param value - Number to format
   * @param maxDecimals - Maximum decimal places (default: 10)
   * @returns Formatted number
   */
  static formatResult(value: number, maxDecimals: number = 10): number {
    if (!isFinite(value)) {
      return value;
    }

    // For very small numbers, use scientific notation
    if (Math.abs(value) < 0.0001 && value !== 0) {
      return parseFloat(value.toExponential(6));
    }

    // For very large numbers, use scientific notation
    if (Math.abs(value) > 1e10) {
      return parseFloat(value.toExponential(6));
    }

    // Round to maxDecimals and remove trailing zeros
    const rounded = parseFloat(value.toFixed(maxDecimals));
    return rounded;
  }

  /**
   * Validate conversion inputs
   *
   * @param value - Value to validate
   * @param fromUnit - Source unit ID
   * @param toUnit - Target unit ID
   * @param availableUnits - List of valid unit IDs
   * @returns Validation result
   */
  static validate(
    value: number,
    fromUnit: string,
    toUnit: string,
    availableUnits: string[]
  ): { valid: boolean; error?: string } {
    if (isNaN(value)) {
      return { valid: false, error: 'Invalid number' };
    }

    if (!isFinite(value)) {
      return { valid: false, error: 'Number must be finite' };
    }

    if (!availableUnits.includes(fromUnit)) {
      return { valid: false, error: `Invalid source unit: ${fromUnit}` };
    }

    if (!availableUnits.includes(toUnit)) {
      return { valid: false, error: `Invalid target unit: ${toUnit}` };
    }

    return { valid: true };
  }
}
