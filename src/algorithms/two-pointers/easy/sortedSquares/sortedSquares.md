# Squares of a Sorted Array

---

## Table of Contents

- [Theory](#theory)
- [Problem Statement](#problem-statement)
- [Examples](#examples)
- [All Possible Solutions](#all-possible-solutions)
- [Summary Table](#summary-table)
- [Common Mistakes](#common-mistakes)
- [Interview Tips](#interview-tips)
- [Related Problems](#related-problems)
- [Further Reading](#further-reading)
- [Practice & Notes](#practice--notes)

---

## Theory

### What is the "Squares of a Sorted Array" Problem?

Given a sorted array of integers (which may include negative numbers), the task is to return a new array containing the squares of each number, also sorted in non-decreasing order.

This problem is a classic application of the **two pointers** technique and is often used to teach:

- Handling negative numbers in sorted arrays
- Two pointers from both ends
- Efficient in-place merging and transformation

---

### Why is This Problem Important?

- **Interview Favorite:** It is a common question to test understanding of two pointers and array manipulation.
- **Foundation for Other Problems:** Many sliding window and two-pointer problems build on this pattern.
- **Teaches Efficient Merging:** Shows how to merge or transform sorted data efficiently.

---

### Two Pointers Approach Explained

- Since squaring negative numbers makes them positive, the largest squares may come from either end of the array.
- Use two pointers (`left` at the start, `right` at the end).
- Compare absolute values, fill the result array from the end to the start.

---

### Brute Force vs. Two Pointers

| Approach     | Time Complexity | Space Complexity | Description                |
| ------------ | --------------- | ---------------- | -------------------------- |
| Brute Force  | O(n log n)      | O(n)             | Square all, then sort      |
| Two Pointers | O(n)            | O(n)             | Fill result from both ends |

---

### Real-World Applications

- **Signal Processing:** Squaring values for energy calculations.
- **Data Normalization:** Transforming and sorting data for further analysis.
- **Competitive Programming:** Pattern for merging and transforming sorted arrays.

---

## Problem Statement

Given an integer array `nums` sorted in non-decreasing order, return an array of the **squares** of each number, also sorted in non-decreasing order.

---

## Examples

### Example 1

**Input:**

```
nums = [-4, -1, 0, 3, 10]
```

**Output:**

```
[0, 1, 9, 16, 100]
```

---

### Example 2

**Input:**

```
nums = [-7, -3, 2, 3, 11]
```

**Output:**

```
[4, 9, 9, 49, 121]
```

---

### Example 3

**Input:**

```
nums = [-5, -3, -2, -1]
```

**Output:**

```
[1, 4, 9, 25]
```

---

## All Possible Solutions

---

### 1. Brute Force

**Approach:**  
Square every element, then sort the resulting array.

**Code:**

```typescript
export function sortedSquaresBruteForce(nums: number[]): number[] {
  return nums.map((x) => x * x).sort((a, b) => a - b);
}
```

**Pros:**

- Very easy to implement.

**Cons:**

- **Time Complexity:** O(n log n) due to sorting.
- Not optimal for interviews.

---

### 2. Two Pointers (Optimal)

**Approach:**  
Use two pointers at both ends of the array. Compare absolute values, square the larger, and fill the result array from the end.

**Code:**

```typescript
export function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n);
  let left = 0,
    right = n - 1,
    pos = n - 1;
  while (left <= right) {
    const leftSq = nums[left] * nums[left];
    const rightSq = nums[right] * nums[right];
    if (leftSq > rightSq) {
      result[pos--] = leftSq;
      left++;
    } else {
      result[pos--] = rightSq;
      right--;
    }
  }
  return result;
}
```

**Pros:**

- **Time Complexity:** O(n) — very fast.
- **Space Complexity:** O(n).
- Standard and accepted in interviews.

**Cons:**

- Uses extra space for the result array.

---

## Summary Table

| Approach     | Time Complexity | Space Complexity | When to Use                |
| ------------ | --------------- | ---------------- | -------------------------- |
| Brute Force  | O(n log n)      | O(n)             | Quick implementation       |
| Two Pointers | O(n)            | O(n)             | Optimal, for sorted arrays |

---

## Common Mistakes

- Forgetting to sort after squaring (in brute force).
- Not handling negative numbers correctly.
- Off-by-one errors in pointer movement.
- Overwriting elements in the result array.

---

## Interview Tips

- Clarify if the input array is always sorted.
- Ask about constraints on input size and values.
- Discuss time and space complexity.
- Mention edge cases: all negatives, all positives, zeros, duplicates.

---

## Related Problems

- [Two Sum II - Input Array Is Sorted](../../hash-map/easy/twoSumII/twoSumII.md)
- [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

---

## Further Reading

- [LeetCode Problem](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [Two Pointers Pattern - Educative](https://www.educative.io/courses/grokking-the-coding-interview/gx6oOQ3A0kA)
- [Wikipedia: Two-pointer technique](https://en.wikipedia.org/wiki/Two-pointer_technique)

---

## Practice & Notes

- Try to implement both brute-force and two-pointer solutions.
- Write down your thoughts, alternate approaches, or mistakes you made here.
- Think about how you would extend this to cubes, or other transformations.

---
