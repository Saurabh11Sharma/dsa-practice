/**
 * Problem: Squares of a Sorted Array
 * Difficulty: Easy
 * Category: Arrays / Two Pointers
 *
 * 📝 Problem Statement:
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order.
 *
 * ⏱ Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums is sorted in non-decreasing order
 *
 * ✅ Example:
 * Input: [-4, -1, 0, 3, 10]
 * Output: [0, 1, 9, 16, 100]
 *
 * 🧪 Additional Test Cases:
 * Input: [-7, -3, 2, 3, 11]
 * Output: [4, 9, 9, 49, 121]
 *
 * Input: [-5, -3, -2, -1]
 * Output: [1, 4, 9, 25]
 *
 * Input: [0, 1, 2, 3, 4]
 * Output: [0, 1, 4, 9, 16]
 *
 * 💡 Hints:
 * - The largest square may come from either end of the array.
 * - Use two pointers: one at the start, one at the end.
 * - Fill the result array from the end to the start.
 *
 * Time: O(n) – linear scan
 * Space: O(n) – result array
 */

/**
 * Returns the squares of a sorted array, sorted in non-decreasing order.
 * Uses the two pointers technique for optimal performance.
 * @param nums - Sorted array of integers (may include negatives)
 * @returns Sorted array of squares
 */

export function sortedSquares(nums: number[]): number[] {
  // To be removed
  return nums;
}

/*
Pattern: Two Pointers
- Start pointers at both ends of the array.
- Compare absolute values, fill the result array from the back.
- Efficient for sorted input with possible negative numbers.

Related Problems:
- Merge Sorted Array
- Maximum Subarray
- Move Zeroes
*/
