import {
  TestCase,
  generateLargeTestCase,
  generateRandomTestCase,
  isValidTwoSumIIResult,
} from '../../../../utils/testUtils';
import { twoSumII } from './twoSumII';

const testCases: TestCase[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [1, 2],
    description: 'Small array, simple case',
  },
  {
    nums: [2, 3, 4],
    target: 6,
    expected: [1, 3],
    description: 'Small array, another case',
  },
  {
    nums: [3, 3],
    target: 6,
    expected: [1, 2],
    description: 'Small array, duplicate numbers',
  },
  {
    nums: [1, 2],
    target: 3,
    expected: [1, 2],
    description: 'Minimum size array',
  },
  {
    nums: [0, 0, 3, 4],
    target: 0,
    expected: [1, 2],
    description: 'Zeros in array',
  },
  {
    nums: [-3, 3, 4, 90],
    target: 0,
    expected: [1, 2],
    description: 'Negative and positive numbers',
  },
  // Large and random cases (sorted, with 1-based expected indices)
  (() => {
    const tc = generateLargeTestCase(10_000);
    tc.nums.sort((a, b) => a - b);
    let l = 0,
      r = tc.nums.length - 1;
    while (l < r) {
      const sum = tc.nums[l] + tc.nums[r];
      if (sum === tc.target) {
        tc.expected = [l + 1, r + 1];
        break;
      } else if (sum < tc.target) l++;
      else r--;
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
      } else if (sum < tc.target) l++;
      else r--;
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
      } else if (sum < tc.target) l++;
      else r--;
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
      } else if (sum < tc.target) l++;
      else r--;
    }
    return tc;
  })(),
];

const IDEAL_TIME_MS = 10;
const IDEAL_MEMORY_KB_SMALL = 64;
const IDEAL_MEMORY_KB_LARGE = 12000;

describe('twoSumII', () => {
  testCases.forEach(({ nums, target, expected, description }, index) => {
    const isLarge = index >= 6;
    const testName = description
      ? `${description} (n=${nums.length})`
      : `Random/Large case (n=${nums.length})`;

    it(testName, () => {
      const startMem = process.memoryUsage().heapUsed;
      const startTime = process.hrtime.bigint();

      const result = twoSumII(nums, target);

      const endTime = process.hrtime.bigint();
      const endMem = process.memoryUsage().heapUsed;

      const timeMs = Number(endTime - startTime) / 1_000_000;
      const memKb = (endMem - startMem) / 1024;

      let passed: boolean;
      if (expected && expected.length === 2 && index < 6) {
        passed = JSON.stringify(result) === JSON.stringify(expected);
      } else {
        passed = isValidTwoSumIIResult(nums, target, result);
      }

      expect(passed).toBe(true);
      expect(timeMs).toBeLessThanOrEqual(IDEAL_TIME_MS);
      expect(memKb).toBeLessThanOrEqual(
        isLarge ? IDEAL_MEMORY_KB_LARGE : IDEAL_MEMORY_KB_SMALL,
      );
    });
  });
});
