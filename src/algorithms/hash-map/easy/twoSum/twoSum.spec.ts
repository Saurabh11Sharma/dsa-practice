import {
  TestCase,
  generateLargeTestCase,
  generateRandomTestCase,
  isValidTwoSumResult,
} from './../../../../utils/testUtils';
import { twoSum } from './twoSum';

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
  generateLargeTestCase(10_000),
  generateLargeTestCase(100_000),
  generateRandomTestCase(5000),
  generateRandomTestCase(20000),
];

describe('twoSum', () => {
  testCases.forEach(({ nums, target, expected, description }, index) => {
    const testName = description
      ? `${description} (n=${nums.length})`
      : `Random/Large case (n=${nums.length})`;

    it(testName, () => {
      const result = twoSum(nums, target);

      let passed: boolean;
      if (expected && expected.length === 2 && index < 6) {
        passed = JSON.stringify(result) === JSON.stringify(expected);
      } else {
        passed = isValidTwoSumResult(nums, target, result);
      }

      expect(passed).toBe(true);
    });
  });
});
