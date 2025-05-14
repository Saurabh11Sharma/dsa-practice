/**
 * Problem 2: Two Sum II – Input Array is Sorted
 * Difficulty: Easy
 * Category: Arrays / Two Pointers
 *
 * 📝 Problem Statement:
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target.
 *
 * Return the indices of the two numbers as an array of the two integers [index1, index2] of the solution.
 * Note: index1 must be less than index2.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * ✅ Example:
 * Input:
 *   numbers = [2, 7, 11, 15]
 *   target = 9
 * Output:
 *   [1, 2]
 * Explanation:
 *   numbers[0] + numbers[1] == 9
 *
 * 🧪 Test Cases:
 * Test Case 1:
 *   numbers = [2, 3, 4]
 *   target = 6
 *   Expected Output: [1, 3]
 *
 * Test Case 2:
 *   numbers = [-1, 0]
 *   target = -1
 *   Expected Output: [1, 2]
 *
 * ⛔️ Constraints:
 * - Only one valid answer exists
 * - Must use constant extra space (O(1) space)
 *
 * 💡 Hint:
 * Since the array is sorted, you can use the two pointer technique:
 *   - Start one pointer at the beginning, one at the end.
 *   - Move pointers inward based on the sum.
 *
 * 🎯 Your Task:
 * Write your code using the two pointer approach.
 * Avoid hash maps or extra space.
 * Return 1-based indices (as required).
 */

/**
 * Returns 1-based indices of the two numbers such that they add up to the target.
 * @param numbers - Sorted array of integers (1-indexed for output)
 * @param target - Target sum
 * @returns Indices of the two numbers (1-based)
 * @example
 * twoSumSorted([2, 7, 11, 15], 9) // returns [1, 2]
 */
export function twoSumSorted(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            // Return 1-based indices
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    // If no solution is found (should not happen as per constraints)
    return [];
}
