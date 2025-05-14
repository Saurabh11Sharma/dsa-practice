/**
 * Problem 1: Two Sum
 * Difficulty: Easy
 * Category: Arrays / Hashing
 *
 * 📝 Problem Statement:
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to the target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * ⏱ Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 *
 * ✅ Example:
 * Input:
 *   nums = [2, 7, 11, 15]
 *   target = 9
 * Output:
 *   [0, 1]
 * Explanation:
 *   nums[0] + nums[1] == 2 + 7 == 9, so return [0, 1]
 */

/**
 * Returns indices of the two numbers such that they add up to the target.
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of the two numbers
 * @example
 * twoSumProblem([2, 7, 11, 15], 9) // returns [0, 1]
 */

// Basic Code
// export function twoSumProblem(nums: number[], target: number): number[] {
//     const response: number[] = [];

//     if (nums.length < 2) {
//         return response;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }

//     return response;
// }

// Optimized Code
export function twoSumProblem(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement)!, i];
    }
    hashMap.set(nums[i], i);
  }

  return [];
}
