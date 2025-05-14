import { twoSumProblem } from '../solutions/twoSumProblem2';
import {
  TestCase,
  generateLargeTestCase,
  generateRandomTestCase,
  printTableHeader,
  printTableRow,
} from './testUtils';

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

const IDEAL_TIME_MS = 10;
const IDEAL_MEMORY_KB = 64;

export function runTests() {
  const sep = printTableHeader(
    'twoSumProblem2',
    IDEAL_TIME_MS,
    IDEAL_MEMORY_KB,
  );

  testCases.forEach(({ nums, target, expected, description }, index) => {
    const startMem = process.memoryUsage().heapUsed;
    const startTime = process.hrtime.bigint();

    const result = twoSumProblem(nums, target);

    const endTime = process.hrtime.bigint();
    const endMem = process.memoryUsage().heapUsed;

    const timeMs = Number(endTime - startTime) / 1_000_000;
    const memKb = (endMem - startMem) / 1024;

    const timeStatus = timeMs <= IDEAL_TIME_MS;
    const memStatus = memKb <= IDEAL_MEMORY_KB;
    const passed = JSON.stringify(result) === JSON.stringify(expected);

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
