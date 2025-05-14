export interface TestCase {
  nums: number[];
  target: number;
  expected: number[];
  description?: string;
}

export function generateLargeTestCase(size: number): TestCase {
  const nums = Array.from({ length: size }, (_, i) => i + 1);
  const target = nums[size - 2] + nums[size - 1];
  return {
    nums,
    target,
    expected: [size - 2, size - 1],
    description: `Large array, size=${size}, last two elements`,
  };
}

export function generateRandomTestCase(size: number): TestCase {
  const nums = Array.from({ length: size }, () =>
    Math.floor(Math.random() * 100000),
  );
  const i = Math.floor(Math.random() * size);
  let j = Math.floor(Math.random() * size);
  while (j === i) j = Math.floor(Math.random() * size);
  const target = nums[i] + nums[j];
  return {
    nums,
    target,
    expected: i < j ? [i, j] : [j, i],
    description: `Random array, size=${size}, indices [${i},${j}]`,
  };
}

export function isValidTwoSumResult(
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

export function isValidTwoSumIIResult(
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
