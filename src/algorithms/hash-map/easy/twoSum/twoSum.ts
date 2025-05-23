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
 *   nums[0] + nums[1] == 2 + 7 == 9, so return [0, 1].
 *
 * 🧪 Additional Test Cases:
 * Test Case 1:
 *   nums = [3, 2, 4]
 *   target = 6
 *   Expected Output: [1, 2]
 *
 * Test Case 2:
 *   nums = [3, 3]
 *   target = 6
 *   Expected Output: [0, 1]
 */

/**
 * Returns indices of the two numbers such that they add up to the target.
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of the two numbers
 * @example
 * twoSum([2, 7, 11, 15], 9) // returns [0, 1]
 */
export function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (hashMap.has(difference)) {
      return [hashMap.get(difference)!, i];
    }
    hashMap.set(nums[i], i);
  }
  return [];
}
