import { twoSumProblem } from '../solutions/twoSumProblem';

/**
 * Test cases for twoSumProblem.
 * Each test provides an input array, a target sum, and the expected output indices.
 * Test cases are dynamically generated to cover a wide range of scenarios and sizes.
 */
interface TestCase {
    nums: number[];
    target: number;
    expected: number[];
    description?: string;
}

// Generate a large test case dynamically (last two elements sum to target)
function generateLargeTestCase(size: number): TestCase {
    const nums = Array.from({ length: size }, (_, i) => i + 1);
    const target = nums[size - 2] + nums[size - 1];
    return {
        nums,
        target,
        expected: [size - 2, size - 1],
        description: `Large array, size=${size}, last two elements`
    };
}

// Generate a random test case with a guaranteed solution
function generateRandomTestCase(size: number): TestCase {
    const nums = Array.from({ length: size }, () => Math.floor(Math.random() * 100000));
    const i = Math.floor(Math.random() * size);
    let j = Math.floor(Math.random() * size);
    while (j === i) j = Math.floor(Math.random() * size);
    const target = nums[i] + nums[j];
    return {
        nums,
        target,
        expected: i < j ? [i, j] : [j, i],
        description: `Random array, size=${size}, indices [${i},${j}]`
    };
}

const testCases: TestCase[] = [
    // Small, edge, and typical cases
    {
        nums: [2, 7, 11, 15],
        target: 9,
        expected: [0, 1],
        description: "Small array, simple case"
    },
    {
        nums: [3, 2, 4],
        target: 6,
        expected: [1, 2],
        description: "Small array, another case"
    },
    {
        nums: [3, 3],
        target: 6,
        expected: [0, 1],
        description: "Small array, duplicate numbers"
    },
    {
        nums: [1, 2],
        target: 3,
        expected: [0, 1],
        description: "Minimum size array"
    },
    {
        nums: [0, 4, 3, 0],
        target: 0,
        expected: [0, 3],
        description: "Zeros in array"
    },
    {
        nums: [-3, 4, 3, 90],
        target: 0,
        expected: [0, 2],
        description: "Negative and positive numbers"
    },
    // Large and random cases
    generateLargeTestCase(10_000),
    generateLargeTestCase(100_000),
    generateRandomTestCase(5000),
    generateRandomTestCase(20000)
];

// Reasonable thresholds for this problem
const IDEAL_TIME_MS = 10;    // 10 milliseconds for large cases
const IDEAL_MEMORY_KB = 64;  // 64 KB for large cases

export function runTests() {
    testCases.forEach(({ nums, target, expected, description }, index) => {
        const startMem = process.memoryUsage().heapUsed;
        const startTime = process.hrtime.bigint();

        const result = twoSumProblem(nums, target);

        const endTime = process.hrtime.bigint();
        const endMem = process.memoryUsage().heapUsed;

        const timeMs = Number(endTime - startTime) / 1_000_000;
        const memKb = (endMem - startMem) / 1024;

        const timeStatus = timeMs <= IDEAL_TIME_MS ? "✅" : "❌";
        const memStatus = memKb <= IDEAL_MEMORY_KB ? "✅" : "❌";

        const desc = description ? `(${description})` : "";

        if (JSON.stringify(result) === JSON.stringify(expected)) {
            console.log(
                `Test case ${index + 1} ${desc}: Passed | Time: ${timeMs.toFixed(3)} ms ${timeStatus} | Memory: ${memKb.toFixed(2)} KB ${memStatus}`
            );
        } else {
            console.error(
                `Test case ${index + 1} ${desc}: Failed. Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)} | Time: ${timeMs.toFixed(3)} ms ${timeStatus} | Memory: ${memKb.toFixed(2)} KB ${memStatus}`
            );
        }
    });
}

// Run the tests
runTests();
