# Hash Map Algorithms

A reference guide for hash map (hash table) problems, patterns, and best practices in DSA.

---

## 📝 Overview

A **hash map** (also known as a hash table, dictionary, or map) is a data structure that stores key-value pairs and provides fast average-case lookup, insertion, and deletion.  
Hash maps are foundational in computer science, enabling efficient data retrieval and management.  
They are widely used in databases, caches, compilers, and are a staple in coding interviews.

- **History:** Invented by H. P. Luhn in 1953, hash tables revolutionized associative data storage.
- **Why it matters:** Hash maps allow O(1) average-case access, making them ideal for frequency counting, caching, and fast lookups.

---

## 🧠 Core Concepts

- **Hash Function:** Maps keys to indices in an underlying array.
- **Collision Resolution:** Techniques like chaining (linked lists) or open addressing (probing) to handle multiple keys mapping to the same index.
- **Load Factor:** Ratio of entries to buckets; affects performance and triggers resizing.
- **Key Operations:** Insert, delete, search, update.
- **Underlying Structure:** Typically an array of buckets.

---

## ⏱️ Complexity

| Operation     | Time Complexity      | Space Complexity |
| ------------- | -------------------- | ---------------- |
| Insert        | O(1) avg, O(n) worst | O(n)             |
| Delete        | O(1) avg, O(n) worst | O(n)             |
| Search/Access | O(1) avg, O(n) worst | O(n)             |
| Update        | O(1) avg, O(n) worst | O(n)             |

> Worst-case occurs when all keys collide (poor hash function or adversarial input).

---

## 🏗️ Patterns

- **Frequency Counting:** Count occurrences of elements (e.g., most common word).
- **Caching/Memoization:** Store computed results for fast reuse.
- **Detecting Duplicates:** Track seen elements for O(1) duplicate checks.
- **Grouping by Key:** Group anagrams, categorize data by property.
- **Two Sum:** Find pairs with a given sum using a hash map for complements.

---

## 🌍 Use Cases

- **Databases:** Indexing and fast lookups.
- **Compilers:** Symbol tables for variable/function names.
- **Web Caching:** Store and retrieve cached responses.
- **Counting/Statistics:** Word frequency, histogram, analytics.
- **Interview Problems:** Two Sum, Group Anagrams, Subarray Sum Equals K.

---

## ✅ Pros & ❌ Cons

**Pros:**

- Fast average-case lookup, insert, and delete (O(1)).
- Flexible key types (strings, numbers, objects in some languages).
- Simple API and widely supported.

**Cons:**

- No guaranteed order (unless using ordered maps).
- Poor worst-case performance if many collisions.
- Requires good hash function for efficiency.
- Uses extra memory for buckets and pointers.

---

## ⚠️ Pitfalls

- Using mutable objects as keys (in JS, only strings/symbols are valid object keys).
- Not handling hash collisions properly.
- Forgetting to resize when load factor is high.
- Assuming order of iteration (not guaranteed in plain objects).
- Overwriting existing keys unintentionally.

---

## 📝 Example Problems

| Problem Name                 | Difficulty | Description                                    | Link                                                                        |
| ---------------------------- | ---------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| Two Sum                      | Easy       | Find indices of two numbers that sum to target | [LeetCode 1](https://leetcode.com/problems/two-sum/)                        |
| Group Anagrams               | Medium     | Group words that are anagrams                  | [LeetCode 49](https://leetcode.com/problems/group-anagrams/)                |
| Subarray Sum Equals K        | Medium     | Count subarrays with sum k                     | [LeetCode 560](https://leetcode.com/problems/subarray-sum-equals-k/)        |
| Longest Consecutive Sequence | Hard       | Find length of longest consecutive sequence    | [LeetCode 128](https://leetcode.com/problems/longest-consecutive-sequence/) |
| Valid Anagram                | Easy       | Check if two strings are anagrams              | [LeetCode 242](https://leetcode.com/problems/valid-anagram/)                |

---

## 🎨 Visualizations

- [VisuAlgo: Hash Table](https://visualgo.net/en/hashtable)
- [YouTube: Hash Table Visualizations](https://www.youtube.com/results?search_query=hash+table+visualization)
- Draw diagrams showing hash function mapping, collisions, and chaining.

---

## 📚 References

- [LeetCode Hash Table Problems](https://leetcode.com/tag/hash-table/)
- [GeeksforGeeks: Hashing Data Structure](https://www.geeksforgeeks.org/hashing-data-structure/)
- [MDN: JavaScript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Wikipedia: Hash Table](https://en.wikipedia.org/wiki/Hash_table)
- [freeCodeCamp: Hash Tables Explained](https://www.freecodecamp.org/news/hash-tables-explained/)

---

## 🚀 Tips for Mastery

- Practice implementing a hash map from scratch (array + hash function + collision handling).
- Experiment with different hash functions and observe collision rates.
- Solve a variety of hash map problems (see above).
- Learn the differences between Map, Object, and Set in JavaScript.
- Visualize how collisions and resizing work.
- Benchmark performance with different data sizes and key types.
- Teach the concept to someone else or write a blog post.

---

## 🗺️ Learning Roadmap

1. Understand the hash function and collision resolution.
2. Implement a hash map from scratch.
3. Practice classic problems (see above).
4. Study real-world applications and performance trade-offs.
5. Review and optimize your solutions.
6. Teach or write about what you’ve learned.

---

Happy learning and coding! 🚀
