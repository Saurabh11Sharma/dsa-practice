# Two Sum II – Input Array Is Sorted

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

### What is Two Sum II?

Two Sum II is a variation of the classic Two Sum problem, but the input array is **sorted in non-decreasing order**.  
This allows us to use the efficient **two-pointer technique** to solve the problem in O(n) time and O(1) space.

---

### Why is Two Sum II Important?

- **Interview Favorite:** Demonstrates understanding of two-pointer technique.
- **Foundation for Other Problems:** Many interval, subarray, and sorted array problems use two pointers.
- **Optimal Solution:** Achieves O(n) time and O(1) space.

---

## Problem Statement

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target.

Return the indices of the two numbers as an array of the two integers `[index1, index2]` of the solution.  
Note: `index1` must be less than `index2`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

---

## Examples

### Example 1

**Input:**

```
numbers = [2, 7, 11, 15]
target = 9
```

**Output:**

```
[1, 2]
```

**Explanation:**  
numbers[0] + numbers[1] == 2 + 7 == 9, so return [1, 2].

---

### Example 2

**Input:**

```
numbers = [2, 3, 4]
target = 6
```

**Output:**

```
[1, 3]
```

**Explanation:**  
numbers[0] + numbers[2] == 2 + 4 == 6, so return [1, 3].

---

### Example 3

**Input:**

```
numbers = [-1, 0]
target = -1
```

**Output:**

```
[1, 2]
```

**Explanation:**  
numbers[0] + numbers[1] == -1 + 0 == -1, so return [1, 2].

---

## All Possible Solutions

---

### 1. Two Pointers (Optimal)

**Approach:**

- Start with two pointers: one at the beginning (`left`), one at the end (`right`).
- Calculate the sum of the numbers at these pointers.
- If the sum equals the target, return the 1-based indices.
- If the sum is less than the target, move the left pointer right.
- If the sum is greater than the target, move the right pointer left.

**Code:**

```typescript
export function twoSumII(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
```

**Pros:**

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- Very efficient and simple for sorted arrays.

**Cons:**

- Only works if the array is sorted.

---

### 2. Hash Map

**Approach:**

- Store each number and its index in a hash map.
- For each number, check if `target - number` exists in the map.

**Code:**

```typescript
export function twoSumIIHash(numbers: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement)! + 1, i + 1]; // 1-based indices
    }
    map.set(numbers[i], i);
  }
  return [];
}
```

**Pros:**

- Works for unsorted arrays too.

**Cons:**

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)
- Not as space-efficient as two pointers for sorted arrays.

---

## Summary Table

| Approach     | Time Complexity | Space Complexity | When to Use     |
| ------------ | --------------- | ---------------- | --------------- |
| Two Pointers | O(n)            | O(1)             | Sorted arrays   |
| Hash Map     | O(n)            | O(n)             | Unsorted arrays |

---

## Common Mistakes

- Returning 0-based indices instead of 1-based.
- Using the same element twice.
- Not checking if the array is sorted before using two pointers.

---

## Interview Tips

- Clarify if the array is sorted.
- Ask if negative numbers and duplicates are allowed.
- Confirm if only one solution exists.
- Discuss time and space complexity.

---

## Related Problems

- [Two Sum (Unsorted Array)](../../hash-map/easy/twoSum/twoSum.md)
- [3Sum](../../../threeSum/threeSum.md)
- [4Sum](../../../fourSum/fourSum.md)

---

## Further Reading

- [Two-pointer technique - GeeksforGeeks](https://www.geeksforgeeks.org/two-pointer-technique/)
- [LeetCode Problem](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

---

## Practice & Notes

- Try to implement the solution yourself before looking at the code!
- Write down your thoughts, alternate approaches, or mistakes you made here.
- Think about how you would extend this to 3Sum, 4Sum, or other variants.

---
