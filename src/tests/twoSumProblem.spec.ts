import {
  TestCase,
  generateLargeTestCase,
  generateRandomTestCase,
  printTableHeader,
  printTableRow,
} from './testUtils';
import { twoSumProblem } from '../solutions/twoSumProblem';

// All test cases: small, edge, large, and random
const testCases: TestCase[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
    description: 'Small array, simple case',
  },
  {
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
    description: 'Small array, another case',
  },
  {
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
    description: 'Small array, duplicate numbers',
  },
  {
    nums: [1, 2],
    target: 3,
    expected: [0, 1],
    description: 'Minimum size array',
  },
  {
    nums: [0, 4, 3, 0],
    target: 0,
    expected: [0, 3],
    description: 'Zeros in array',
  },
  {
    nums: [-3, 4, 3, 90],
    target: 0,
    expected: [0, 2],
    description: 'Negative and positive numbers',
  },
  // Large and random cases
  generateLargeTestCase(10_000),
  generateLargeTestCase(100_000),
  generateRandomTestCase(5000),
  generateRandomTestCase(20000),
];

// Thresholds for performance checks
const IDEAL_TIME_MS = 20; // 20 milliseconds for large cases
const IDEAL_MEMORY_KB_SMALL = 64; // 64 KB for small cases
const IDEAL_MEMORY_KB_LARGE = 12000; // 12 MB for large/random cases

function isValidTwoSumResult(
  nums: number[],
  target: number,
  result: number[] | undefined | null,
): boolean {
  if (!Array.isArray(result) || result.length !== 2) return false;
  const [i, j] = result;
  if (i === j) return false;
  if (i < 0 || i >= nums.length || j < 0 || j >= nums.length) return false;
  return nums[i] + nums[j] === target;
}

export function runTests() {
  const sep = printTableHeader(
    'twoSumProblem',
    IDEAL_TIME_MS,
    IDEAL_MEMORY_KB_LARGE,
  );

  testCases.forEach(({ nums, target, expected, description }, index) => {
    const startMem = process.memoryUsage().heapUsed;
    const startTime = process.hrtime.bigint();

    const result = twoSumProblem(nums, target);

    const endTime = process.hrtime.bigint();
    const endMem = process.memoryUsage().heapUsed;

    const timeMs = Number(endTime - startTime) / 1_000_000;
    const memKb = (endMem - startMem) / 1024;

    // Use stricter memory for small/edge cases, relaxed for large/random
    const isLarge = index >= 6;
    const memStatus =
      memKb <= (isLarge ? IDEAL_MEMORY_KB_LARGE : IDEAL_MEMORY_KB_SMALL);
    const timeStatus = timeMs <= IDEAL_TIME_MS;

    // For random/large cases, just check validity, not exact indices
    let passed: boolean;
    if (expected && expected.length === 2 && index < 6) {
      passed = JSON.stringify(result) === JSON.stringify(expected);
    } else {
      passed = isValidTwoSumResult(nums, target, result);
    }

    printTableRow(
      index,
      description ?? '',
      timeMs,
      memKb,
      passed,
      timeStatus,
      memStatus,
    );
  });

  // Print closing separator
  console.log(sep);
}

// Run the tests when this file is executed
runTests();
