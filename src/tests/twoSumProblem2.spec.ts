import { twoSumProblem2 } from '../solutions/twoSumProblem2';
import {
  TestCase,
  generateLargeTestCase,
  generateRandomTestCase,
  printTableHeader,
  printTableRow,
} from './testUtils';

// All test cases MUST use sorted arrays for twoSumProblem2!
const testCases: TestCase[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [1, 2], // 1-based indices for twoSumProblem2
    description: 'Small array, simple case',
  },
  {
    nums: [2, 3, 4], // sorted!
    target: 6,
    expected: [1, 3], // 1-based indices
    description: 'Small array, another case',
  },
  {
    nums: [3, 3],
    target: 6,
    expected: [1, 2], // 1-based indices
    description: 'Small array, duplicate numbers',
  },
  {
    nums: [1, 2],
    target: 3,
    expected: [1, 2], // 1-based indices
    description: 'Minimum size array',
  },
  {
    nums: [0, 0, 3, 4], // sorted!
    target: 0,
    expected: [1, 2], // 1-based indices
    description: 'Zeros in array',
  },
  {
    nums: [-3, 3, 4, 90], // already sorted
    target: 0,
    expected: [1, 2], // 1-based indices
    description: 'Negative and positive numbers',
  },
  // For large and random cases, ensure the input is sorted and expected is 1-based
  (() => {
    const tc = generateLargeTestCase(10_000);
    tc.nums.sort((a, b) => a - b);
    // Find the answer using two pointers for sorted array
    let l = 0,
      r = tc.nums.length - 1;
    while (l < r) {
      const sum = tc.nums[l] + tc.nums[r];
      if (sum === tc.target) {
        tc.expected = [l + 1, r + 1];
        break;
      } else if (sum < tc.target) {
        l++;
      } else {
        r--;
      }
    }
    return tc;
  })(),
  (() => {
    const tc = generateLargeTestCase(100_000);
    tc.nums.sort((a, b) => a - b);
    let l = 0,
      r = tc.nums.length - 1;
    while (l < r) {
      const sum = tc.nums[l] + tc.nums[r];
      if (sum === tc.target) {
        tc.expected = [l + 1, r + 1];
        break;
      } else if (sum < tc.target) {
        l++;
      } else {
        r--;
      }
    }
    return tc;
  })(),
  (() => {
    const tc = generateRandomTestCase(5000);
    tc.nums.sort((a, b) => a - b);
    let l = 0,
      r = tc.nums.length - 1;
    while (l < r) {
      const sum = tc.nums[l] + tc.nums[r];
      if (sum === tc.target) {
        tc.expected = [l + 1, r + 1];
        break;
      } else if (sum < tc.target) {
        l++;
      } else {
        r--;
      }
    }
    return tc;
  })(),
  (() => {
    const tc = generateRandomTestCase(20000);
    tc.nums.sort((a, b) => a - b);
    let l = 0,
      r = tc.nums.length - 1;
    while (l < r) {
      const sum = tc.nums[l] + tc.nums[r];
      if (sum === tc.target) {
        tc.expected = [l + 1, r + 1];
        break;
      } else if (sum < tc.target) {
        l++;
      } else {
        r--;
      }
    }
    return tc;
  })(),
];

const IDEAL_TIME_MS = 10;
const IDEAL_MEMORY_KB_SMALL = 64;
const IDEAL_MEMORY_KB_LARGE = 12000; // 12 MB for large/random cases

function isValidTwoSum2Result(
  numbers: number[],
  target: number,
  result: number[] | undefined | null,
): boolean {
  if (!Array.isArray(result) || result.length !== 2) return false;
  const [i1, i2] = result;
  if (i1 === i2) return false;
  if (i1 < 1 || i1 > numbers.length || i2 < 1 || i2 > numbers.length)
    return false;
  return numbers[i1 - 1] + numbers[i2 - 1] === target;
}

export function runTests() {
  const sep = printTableHeader(
    'twoSumProblem2',
    IDEAL_TIME_MS,
    IDEAL_MEMORY_KB_LARGE,
  );

  testCases.forEach(({ nums, target, expected, description }, index) => {
    const startMem = process.memoryUsage().heapUsed;
    const startTime = process.hrtime.bigint();

    const result = twoSumProblem2(nums, target);

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
      passed = isValidTwoSum2Result(nums, target, result);
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

  console.log(sep);
}

runTests();
