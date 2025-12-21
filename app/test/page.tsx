"use client";

import { ConversionEngine } from "@/lib/conversion/engine";
import { getAllConverters } from "@/lib/data";
import { useState, useEffect } from "react";

export default function TestPage() {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    const converters = getAllConverters();
    const testResults: string[] = [];

    // Test cases with known accurate values
    const tests = [
      // LENGTH
      { type: 'length', from: 'kilometer', to: 'meter', value: 1, expected: 1000 },
      { type: 'length', from: 'meter', to: 'kilometer', value: 1000, expected: 1 },
      { type: 'length', from: 'meter', to: 'centimeter', value: 1, expected: 100 },
      { type: 'length', from: 'centimeter', to: 'meter', value: 100, expected: 1 },
      { type: 'length', from: 'meter', to: 'foot', value: 1, expected: 3.28084 },
      { type: 'length', from: 'inch', to: 'centimeter', value: 1, expected: 2.54 },
      { type: 'length', from: 'mile', to: 'kilometer', value: 1, expected: 1.60934 },

      // AREA
      { type: 'area', from: 'square-kilometer', to: 'square-meter', value: 1, expected: 1000000 },
      { type: 'area', from: 'hectare', to: 'square-meter', value: 1, expected: 10000 },

      // VOLUME
      { type: 'volume', from: 'liter', to: 'milliliter', value: 1, expected: 1000 },
      { type: 'volume', from: 'gallon-us', to: 'liter', value: 1, expected: 3.78541 },

      // WEIGHT
      { type: 'weight', from: 'kilogram', to: 'gram', value: 1, expected: 1000 },
      { type: 'weight', from: 'kilogram', to: 'pound', value: 1, expected: 2.20462 },
      { type: 'weight', from: 'pound', to: 'ounce', value: 1, expected: 16 },

      // SPEED
      { type: 'speed', from: 'kilometer-per-hour', to: 'meter-per-second', value: 1, expected: 0.277778 },
      { type: 'speed', from: 'meter-per-second', to: 'kilometer-per-hour', value: 1, expected: 3.6 },

      // TIME
      { type: 'time', from: 'minute', to: 'second', value: 1, expected: 60 },
      { type: 'time', from: 'hour', to: 'minute', value: 1, expected: 60 },
      { type: 'time', from: 'day', to: 'hour', value: 1, expected: 24 },

      // TEMPERATURE
      { type: 'temperature', from: 'celsius', to: 'fahrenheit', value: 0, expected: 32 },
      { type: 'temperature', from: 'celsius', to: 'fahrenheit', value: 100, expected: 212 },
      { type: 'temperature', from: 'celsius', to: 'kelvin', value: 0, expected: 273.15 },
    ];

    tests.forEach(test => {
      const converter = converters.find(c => c.id === test.type);
      if (converter) {
        try {
          const result = ConversionEngine.convert(
            test.value,
            test.from,
            test.to,
            converter.formula
          );
          const formatted = ConversionEngine.formatResult(result);
          const tolerance = Math.abs(test.expected) * 0.01; // 1% tolerance
          const diff = Math.abs(formatted - test.expected);
          const passed = diff <= tolerance;

          testResults.push(
            `${passed ? '✅' : '❌'} ${test.type}: ${test.value} ${test.from} = ${formatted} ${test.to} (expected ${test.expected})`
          );
        } catch (error) {
          testResults.push(`❌ ${test.type}: ERROR - ${error}`);
        }
      }
    });

    setResults(testResults);
  }, []);

  const passed = results.filter(r => r.startsWith('✅')).length;
  const failed = results.filter(r => r.startsWith('❌')).length;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Conversion Accuracy Tests</h1>

      <div className="mb-6 p-4 bg-gray-100 rounded">
        <p className="text-lg">
          <span className="font-bold text-green-600">Passed: {passed}</span> |{' '}
          <span className="font-bold text-red-600">Failed: {failed}</span> |{' '}
          <span className="font-bold">Total: {results.length}</span>
        </p>
      </div>

      <div className="space-y-2 font-mono text-sm">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-2 rounded ${
              result.startsWith('✅') ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
}
