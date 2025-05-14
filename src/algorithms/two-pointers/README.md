# Two Pointers Algorithms

A comprehensive guide to the two pointers technique, patterns, pitfalls, and best practices in DSA.

---

## 📝 Overview

The **Two Pointers** technique is a fundamental algorithmic strategy that uses two indices (or pointers) to traverse a data structure, typically an array or a string.  
It is especially powerful for problems involving searching for pairs, subarrays, or partitions, and is widely used in both coding interviews and real-world applications.

- **History:** The technique emerged from classic array and string manipulation problems and is now a staple in competitive programming and interviews.
- **Why it matters:** Two pointers can reduce time complexity from O(n²) to O(n) in many scenarios, making brute-force solutions efficient.

---

## 🧠 Core Concepts

- **Pointer Movement:** Use two indices (often called `left` and `right`) that move towards each other or in the same direction.
- **Sorted Data:** Many two-pointer problems require sorted input for optimal efficiency.
- **In-place Processing:** Often enables O(1) space solutions by modifying the input array directly.
- **Variants:**
  - Opposite ends (start and end of array)
  - Same direction (both pointers move forward)
  - Fast and slow pointers (for cycle detection, etc.)

---

## ⏱️ Complexity

| Operation          | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| Find pair with sum | O(n)            | O(1)             |
| Remove duplicates  | O(n)            | O(1)             |
| Reverse array      | O(n)            | O(1)             |
| Partition array    | O(n)            | O(1)             |

---

## 🏗️ Patterns

- **Pair Sum:** Find two numbers in a sorted array that sum to a target.
- **Reverse Array/String:** Swap elements from both ends moving towards the center.
- **Remove Duplicates:** Move unique elements forward, overwrite duplicates.
- **Partitioning:** Rearrange elements based on a condition (e.g., Dutch National Flag problem).
- **Sliding Window:** Combine with two pointers to maintain a window of elements.
- **Fast & Slow Pointers:** Detect cycles in linked lists (Floyd’s Tortoise and Hare).

---

## 🌍 Use Cases

- **Interview Problems:** Two Sum II, 3Sum, Container With Most Water, Trapping Rain Water, Remove Duplicates from Sorted Array, Palindrome Checking.
- **Real-World:**
  - Text parsing (finding substrings, palindromes)
  - Data deduplication
  - Streaming data analysis
  - Image processing (windowed operations)

---

## ✅ Pros & ❌ Cons

**Pros:**

- Reduces time complexity for many search and partition problems.
- Enables in-place solutions with O(1) extra space.
- Simple and intuitive for many array/string problems.

**Cons:**

- Often requires sorted input.
- Not always applicable to unsorted or complex data structures.
- Can be tricky to get pointer movement and edge cases correct.

---

## ⚠️ Pitfalls

- Forgetting to sort the array when required.
- Infinite loops due to incorrect pointer updates.
- Off-by-one errors (especially with inclusive/exclusive bounds).
- Overwriting data unintentionally in in-place algorithms.
- Not handling edge cases (empty array, single element, all duplicates).

---

## 📝 Example Problems

| Problem Name                        | Difficulty | Description                                    | Link                                                                              |
| ----------------------------------- | ---------- | ---------------------------------------------- | --------------------------------------------------------------------------------- |
| Two Sum II - Input Array Is Sorted  | Easy       | Find indices of two numbers that sum to target | [LeetCode 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)   |
| Remove Duplicates from Sorted Array | Easy       | Remove duplicates in-place                     | [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |
| Reverse String                      | Easy       | Reverse a string in-place                      | [LeetCode 344](https://leetcode.com/problems/reverse-string/)                     |
| 3Sum                                | Medium     | Find all unique triplets that sum to zero      | [LeetCode 15](https://leetcode.com/problems/3sum/)                                |
| Container With Most Water           | Medium     | Find max area formed by lines                  | [LeetCode 11](https://leetcode.com/problems/container-with-most-water/)           |
| Trapping Rain Water                 | Hard       | Compute trapped water between bars             | [LeetCode 42](https://leetcode.com/problems/trapping-rain-water/)                 |
| Linked List Cycle                   | Easy       | Detect cycle using fast/slow pointers          | [LeetCode 141](https://leetcode.com/problems/linked-list-cycle/)                  |

---

## 🎨 Visualizations

- [VisuAlgo: Two Pointers](https://visualgo.net/en)
- [YouTube: Two Pointers Pattern](https://www.youtube.com/results?search_query=two+pointers+algorithm)
- Draw diagrams showing pointer movement for each step.
- Example diagram for pair sum:

  ```
  [1, 2, 4, 7, 11, 15]
   ^                ^
  left            right
  ```

---

## 📚 References

- [LeetCode Two Pointers Problems](https://leetcode.com/tag/two-pointers/)
- [NeetCode: Two Pointers Pattern](https://neetcode.io/roadmap)
- [GeeksforGeeks: Two Pointer Technique](https://www.geeksforgeeks.org/two-pointers-technique/)
- [Wikipedia: Two-pointer technique](https://en.wikipedia.org/wiki/Two-pointer_technique)
- [freeCodeCamp: Two Pointers Explained](https://www.freecodecamp.org/news/two-pointer-technique-explained/)

---

## 🚀 Tips for Mastery

- Practice with both sorted and unsorted data (understand when sorting is needed).
- Draw the array/string and pointer positions for each step.
- Write out edge cases and test your code thoroughly.
- Combine two pointers with other patterns (e.g., sliding window).
- Explain your approach out loud or to a peer.
- Implement both iterative and recursive versions where possible.
- Benchmark your solution for large inputs.

---

## 🗺️ Learning Roadmap

1. Understand the pointer movement and when to use each variant.
2. Practice implementing classic problems from scratch.
3. Study edge cases and performance trade-offs.
4. Visualize pointer movement for complex problems.
5. Review and optimize your solutions.
6. Teach or write about what you’ve learned.

---

Happy learning and coding! 🚀
