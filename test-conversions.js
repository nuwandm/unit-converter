/**
 * Comprehensive Conversion Accuracy Test
 * Tests all converters with known conversion values
 */

const { ConversionEngine } = require('./lib/conversion/engine.ts');
const { getAllConverters } = require('./lib/data/index.ts');

// Known accurate conversion test cases
const testCases = {
  // LENGTH
  length: [
    { from: 'kilometer', to: 'meter', value: 1, expected: 1000 },
    { from: 'meter', to: 'kilometer', value: 1000, expected: 1 },
    { from: 'meter', to: 'centimeter', value: 1, expected: 100 },
    { from: 'centimeter', to: 'meter', value: 100, expected: 1 },
    { from: 'meter', to: 'foot', value: 1, expected: 3.28084 },
    { from: 'foot', to: 'meter', value: 1, expected: 0.3048 },
    { from: 'mile', to: 'kilometer', value: 1, expected: 1.60934 },
    { from: 'inch', to: 'centimeter', value: 1, expected: 2.54 },
  ],

  // AREA
  area: [
    { from: 'square-kilometer', to: 'square-meter', value: 1, expected: 1000000 },
    { from: 'square-meter', to: 'square-centimeter', value: 1, expected: 10000 },
    { from: 'hectare', to: 'square-meter', value: 1, expected: 10000 },
    { from: 'acre', to: 'square-meter', value: 1, expected: 4046.86 },
  ],

  // VOLUME
  volume: [
    { from: 'liter', to: 'milliliter', value: 1, expected: 1000 },
    { from: 'cubic-meter', to: 'liter', value: 1, expected: 1000 },
    { from: 'gallon-us', to: 'liter', value: 1, expected: 3.78541 },
    { from: 'liter', to: 'gallon-us', value: 1, expected: 0.264172 },
  ],

  // WEIGHT
  weight: [
    { from: 'kilogram', to: 'gram', value: 1, expected: 1000 },
    { from: 'kilogram', to: 'pound', value: 1, expected: 2.20462 },
    { from: 'pound', to: 'ounce', value: 1, expected: 16 },
    { from: 'metric-ton', to: 'kilogram', value: 1, expected: 1000 },
  ],

  // SPEED
  speed: [
    { from: 'kilometer-per-hour', to: 'meter-per-second', value: 1, expected: 0.277778 },
    { from: 'meter-per-second', to: 'kilometer-per-hour', value: 1, expected: 3.6 },
    { from: 'mile-per-hour', to: 'kilometer-per-hour', value: 1, expected: 1.60934 },
  ],

  // TIME
  time: [
    { from: 'minute', to: 'second', value: 1, expected: 60 },
    { from: 'hour', to: 'minute', value: 1, expected: 60 },
    { from: 'day', to: 'hour', value: 1, expected: 24 },
    { from: 'week', to: 'day', value: 1, expected: 7 },
  ],

  // TEMPERATURE
  temperature: [
    { from: 'celsius', to: 'fahrenheit', value: 0, expected: 32 },
    { from: 'celsius', to: 'fahrenheit', value: 100, expected: 212 },
    { from: 'celsius', to: 'kelvin', value: 0, expected: 273.15 },
    { from: 'fahrenheit', to: 'celsius', value: 32, expected: 0 },
    { from: 'fahrenheit', to: 'celsius', value: 212, expected: 100 },
  ],

  // PRESSURE
  pressure: [
    { from: 'bar', to: 'pascal', value: 1, expected: 100000 },
    { from: 'bar', to: 'psi', value: 1, expected: 14.5038 },
    { from: 'atmosphere', to: 'pascal', value: 1, expected: 101325 },
  ],

  // ENERGY
  energy: [
    { from: 'kilowatt-hour', to: 'joule', value: 1, expected: 3600000 },
    { from: 'calorie', to: 'joule', value: 1, expected: 4.184 },
    { from: 'kilojoule', to: 'joule', value: 1, expected: 1000 },
  ],

  // POWER
  power: [
    { from: 'kilowatt', to: 'watt', value: 1, expected: 1000 },
    { from: 'horsepower', to: 'watt', value: 1, expected: 745.7 },
  ],
};

function testConversion(converterType, testCase) {
  const converters = getAllConverters();
  const converter = converters.find(c => c.id === converterType);

  if (!converter) {
    console.error(`❌ Converter not found: ${converterType}`);
    return false;
  }

  try {
    const result = ConversionEngine.convert(
      testCase.value,
      testCase.from,
      testCase.to,
      converter.formula
    );

    const formatted = ConversionEngine.formatResult(result);
    const tolerance = Math.abs(testCase.expected) * 0.001; // 0.1% tolerance
    const diff = Math.abs(formatted - testCase.expected);

    if (diff <= tolerance) {
      console.log(`✅ ${converterType}: ${testCase.value} ${testCase.from} = ${formatted} ${testCase.to} (expected ${testCase.expected})`);
      return true;
    } else {
      console.error(`❌ ${converterType}: ${testCase.value} ${testCase.from} = ${formatted} ${testCase.to} (expected ${testCase.expected}) - DIFF: ${diff}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ ${converterType}: Error - ${error.message}`);
    return false;
  }
}

function runAllTests() {
  console.log('🧪 Running Conversion Accuracy Tests\n');

  let totalTests = 0;
  let passedTests = 0;

  for (const [converterType, tests] of Object.entries(testCases)) {
    console.log(`\n📊 Testing ${converterType.toUpperCase()}:`);

    for (const testCase of tests) {
      totalTests++;
      if (testConversion(converterType, testCase)) {
        passedTests++;
      }
    }
  }

  console.log(`\n\n📈 RESULTS: ${passedTests}/${totalTests} tests passed`);

  if (passedTests === totalTests) {
    console.log('✅ ALL TESTS PASSED! All conversions are accurate.');
  } else {
    console.log(`❌ ${totalTests - passedTests} tests FAILED! Please review conversion formulas.`);
  }
}

runAllTests();
