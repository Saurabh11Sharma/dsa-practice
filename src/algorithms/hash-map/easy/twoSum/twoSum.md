# Two Sum

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

### What is the Two Sum Problem?

The Two Sum problem is a classic algorithmic challenge that asks:  
**Given an array of numbers and a target value, can you find two distinct elements in the array whose sum is equal to the target?**

This problem is fundamental in computer science and is often used to teach:

- Hash maps (dictionaries)
- Brute-force vs. optimized approaches
- Time and space complexity trade-offs

---

### Why is Two Sum Important?

- **Interview Favorite:** It is one of the most frequently asked questions in coding interviews.
- **Foundation for Other Problems:** Many harder problems (like 3Sum, 4Sum, subarray sum, etc.) build on the ideas from Two Sum.
- **Teaches Hash Maps:** The optimal solution uses a hash map, which is a key data structure in programming.

---

### Hash Map Approach Explained

A hash map (or dictionary) allows you to store key-value pairs and look up values in constant time, O(1).

For Two Sum:

- As you iterate through the array, you store each number and its index in the hash map.
- For each number, you check if `target - number` (the complement) is already in the map.
- If it is, you have found the two numbers that sum to the target.

**Why is this O(n)?**  
Because you only loop through the array once, and each hash map operation is O(1).

---

### Brute Force vs. Hash Map

| Approach    | Time Complexity | Space Complexity | Description                         |
| ----------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force | O(n²)           | O(1)             | Check every pair of numbers         |
| Hash Map    | O(n)            | O(n)             | Store seen numbers for quick lookup |

---

### Real-World Applications

- **Financial Transactions:** Find two expenses that add up to a certain amount.
- **Gaming:** Find two moves or items that combine to a specific effect.
- **Data Analysis:** Find two data points that sum to a threshold.

---

### Variations and Follow-ups

- **Return all pairs:** What if you need all pairs, not just one?
- **Unique pairs:** What if you want only unique pairs?
- **Indices or values:** Should you return indices or the actual numbers?
- **Sorted array:** If the array is sorted, you can use the two-pointer technique (see Two Sum II).

---

### Space-Time Tradeoff

The hash map solution uses extra space to achieve faster time.  
This is a common tradeoff in algorithms:

- **More space → faster time**
- **Less space → slower time**

---

### When Not to Use Hash Map

- If the array is sorted, use the two-pointer approach for O(1) space.
- If you need to avoid extra space for memory-constrained environments.

---

### Practice and Mastery

- Try to solve the problem without looking at the solution.
- Implement both brute-force and hash map approaches.
- Think about edge cases: negative numbers, zeros, duplicates, large arrays.

---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return **indices** of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

---

## Examples

### Example 1

**Input:**

```
nums = [2, 7, 11, 15]
target = 9
```

**Output:**

```
[0, 1]
```

**Explanation:**  
Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

---

### Example 2

**Input:**

```
nums = [3, 2, 4]
target = 6
```

**Output:**

```
[1, 2]
```

**Explanation:**  
Because `nums[1] + nums[2] == 6`, we return `[1, 2]`.

---

### Example 3

**Input:**

```
nums = [3, 3]
target = 6
```

**Output:**

```
[0, 1]
```

**Explanation:**  
Because `nums[0] + nums[1] == 6`, we return `[0, 1]`.

---

## All Possible Solutions

---

### 1. Brute Force

**Approach:**  
Check every possible pair of numbers in the array to see if they sum to the target.

**Code:**

```typescript
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```

**Pros:**

- Very easy to understand and implement.
- No extra space required.

**Cons:**

- **Time Complexity:** O(n²) — slow for large arrays.
- Not suitable for interviews or large datasets.

---

### 2. Hash Map (Optimal)

**Approach:**  
Iterate through the array, for each number, check if its complement (target - number) exists in a hash map. If not, store the number and its index in the map.

**Code:**

```typescript
export function twoSum(nums: number[], target: number): number[] {
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
```

**Pros:**

- **Time Complexity:** O(n) — very fast.
- **Space Complexity:** O(n).
- Standard and accepted in interviews.

**Cons:**

- Uses extra space for the hash map.
- Not suitable if you must use O(1) space.

---

### 3. Sorting + Two Pointers (Only for sorted arrays)

**Approach:**  
If the array is sorted, use two pointers (one at the start, one at the end) and move them inward based on the sum.

**Code:**

```typescript
export function twoSumSorted(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
```

**Pros:**

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- Very efficient if the array is already sorted.

**Cons:**

- Only works for sorted arrays.
- If you need original indices and must sort, you lose index information or need extra mapping.

---

### 4. Sorting + Hash Map (If you need original indices and array is not sorted)

**Approach:**

- Store original indices.
- Sort the array with indices.
- Use two pointers or hash map as above, but map back to original indices.

**Pros:**

- Can work if you need to return original indices after sorting.

**Cons:**

- **Time Complexity:** O(n log n) due to sorting.
- More complex to implement.
- Not as efficient as direct hash map for unsorted arrays.

---

## Summary Table

| Approach        | Time Complexity | Space Complexity | When to Use                 |
| --------------- | --------------- | ---------------- | --------------------------- |
| Brute Force     | O(n²)           | O(1)             | Small arrays, learning      |
| Hash Map        | O(n)            | O(n)             | Unsorted arrays, interviews |
| Two Pointers    | O(n)            | O(1)             | Sorted arrays               |
| Sort + Hash Map | O(n log n)      | O(n)             | Need original indices       |

---

## Common Mistakes

- Returning the values instead of indices.
- Using the same element twice.
- Not handling duplicate values correctly.
- Not considering negative numbers or zeros.

---

## Interview Tips

- Clarify if the array is sorted or not.
- Ask if negative numbers and duplicates are allowed.
- Confirm if only one solution exists or multiple.
- Discuss time and space complexity.
- Mention edge cases and test with them.

---

## Related Problems

- [Two Sum II - Input Array Is Sorted](../twoSumII/twoSumII.md)
- [3Sum](../../threeSum/threeSum.md)
- [4Sum](../../fourSum/fourSum.md)

---

## Further Reading

- [Hash Table - Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [LeetCode Problem](https://leetcode.com/problems/two-sum/)

---

## Practice & Notes

- Try to implement the solution yourself before looking at the code!
- Write down your thoughts, alternate approaches, or mistakes you made here.
- Think about how you would extend this to 3Sum, 4Sum, or other variants.

---
