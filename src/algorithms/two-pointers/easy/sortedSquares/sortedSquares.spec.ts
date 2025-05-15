import { sortedSquares } from './sortedSquares';

interface TestCase {
  nums: number[];
  expected: number[];
  description?: string;
}

const testCases: TestCase[] = [
  {
    nums: [-4, -1, 0, 3, 10],
    expected: [0, 1, 9, 16, 100],
    description: 'Mixed negatives and positives',
  },
  {
    nums: [-7, -3, 2, 3, 11],
    expected: [4, 9, 9, 49, 121],
    description: 'Negative to positive',
  },
  {
    nums: [1],
    expected: [1],
    description: 'Single element',
  },
  {
    nums: [-5, -3, -1],
    expected: [1, 9, 25],
    description: 'All negative numbers',
  },
  {
    nums: [0, 1, 2, 3],
    expected: [0, 1, 4, 9],
    description: 'All non-negative numbers',
  },
  {
    nums: [-10000, 0, 10000],
    expected: [0, 100000000, 100000000],
    description: 'Edge values',
  },
];

describe('sortedSquares', () => {
  testCases.forEach(({ nums, expected, description }, index) => {
    const name = description ?? `Test case ${index + 1}`;
    it(name, () => {
      expect(sortedSquares(nums)).toEqual(expected);
    });
  });
});
