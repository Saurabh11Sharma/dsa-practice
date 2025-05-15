# String Algorithms

A reference guide for string problems, patterns, and best practices in DSA.

---

## 📝 Overview

A **string** is a sequence of characters, widely used to represent text, data, and even encoded information in computer science.  
String algorithms are fundamental for parsing, searching, manipulation, and pattern matching in text.  
They are essential in software engineering, web development, compilers, databases, and are a staple in coding interviews.

- **History:** String processing is one of the oldest areas in computer science, with classic algorithms like KMP and Rabin-Karp.
- **Why it matters:** Efficient string handling is crucial for performance in search engines, text editors, and data processing.
- **Where used:** Industry (search, NLP, bioinformatics), interviews, competitive programming.

---

## 🧠 Core Concepts

- **Immutability:** In many languages, strings are immutable (cannot be changed in place).
- **Character Encoding:** ASCII, Unicode, UTF-8, etc.
- **Substring & Slicing:** Extracting parts of a string.
- **Pattern Matching:** Searching for substrings or patterns (e.g., regex, KMP).
- **String Hashing:** For fast comparison and searching.
- **Two Pointers:** For palindrome, substring, and sliding window problems.

---

## ⏱️ Complexity

| Operation        | Time Complexity | Space Complexity |
| ---------------- | --------------- | ---------------- |
| Access char      | O(1)            | O(1)             |
| Search substring | O(n) to O(n\*m) | O(1)             |
| Concatenation    | O(n)            | O(n)             |
| Split/Join       | O(n)            | O(n)             |
| Replace          | O(n)            | O(n)             |
| Reverse          | O(n)            | O(n)             |

> n = string length, m = pattern length

---

## 🏗️ Patterns

- **Two Pointers:** Palindrome, reverse, substring search.
- **Sliding Window:** Longest/shortest substring with constraints.
- **Hashing:** Anagrams, substring search, rolling hash.
- **Stack:** Valid parentheses, decoding strings.
- **Dynamic Programming:** Edit distance, longest common subsequence.
- **Trie:** Prefix search, autocomplete.

---

## 🌍 Use Cases

- **Text Processing:** Search, replace, format, parse.
- **Data Validation:** Email, URL, password checks.
- **Pattern Matching:** Search engines, plagiarism detection.
- **Natural Language Processing:** Tokenization, stemming, parsing.
- **Interview Problems:** Palindrome, anagram, substring, pattern matching.

---

## ✅ Pros & ❌ Cons

**Pros:**

- Direct support in all programming languages.
- Rich set of built-in methods (split, join, replace, etc.).
- Efficient for small to medium-sized text processing.

**Cons:**

- Immutability can lead to high memory usage for repeated modifications.
- Expensive operations for very large strings (concatenation, replace).
- Unicode and encoding issues can cause bugs if not handled carefully.

---

## ⚠️ Pitfalls

- Off-by-one errors in indexing and slicing.
- Not handling Unicode/multibyte characters correctly.
- Inefficient concatenation in loops (use StringBuilder or arrays).
- Forgetting to handle case sensitivity or whitespace.
- Regex performance traps with complex patterns.

---

## 📝 Example Problems

| Problem Name                                   | Difficulty | Description                                                           | Link                                                                                             |
| ---------------------------------------------- | ---------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Valid Palindrome                               | Easy       | Check if a string is a palindrome                                     | [LeetCode 125](https://leetcode.com/problems/valid-palindrome/)                                  |
| Longest Substring Without Repeating Characters | Medium     | Find the length of the longest substring without repeating characters | [LeetCode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)      |
| Group Anagrams                                 | Medium     | Group words that are anagrams                                         | [LeetCode 49](https://leetcode.com/problems/group-anagrams/)                                     |
| Implement strStr()                             | Easy       | Find the index of the first occurrence of a substring                 | [LeetCode 28](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |
| Longest Palindromic Substring                  | Medium     | Find the longest palindromic substring                                | [LeetCode 5](https://leetcode.com/problems/longest-palindromic-substring/)                       |
| Valid Anagram                                  | Easy       | Check if two strings are anagrams                                     | [LeetCode 242](https://leetcode.com/problems/valid-anagram/)                                     |
| Decode String                                  | Medium     | Decode an encoded string                                              | [LeetCode 394](https://leetcode.com/problems/decode-string/)                                     |

---

## 🎨 Visualizations

- [VisuAlgo: String Algorithms](https://visualgo.net/en/string)
- [YouTube: String Algorithm Visualizations](https://www.youtube.com/results?search_query=string+algorithm+visualization)
- Draw diagrams for KMP, Trie, and sliding window techniques.

---

## 📚 References

- [LeetCode String Problems](https://leetcode.com/tag/string/)
- [GeeksforGeeks: String Data Structure](https://www.geeksforgeeks.org/string-data-structure/)
- [Wikipedia: String (computer science)](<https://en.wikipedia.org/wiki/String_(computer_science)>)
- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [freeCodeCamp: String Algorithms](https://www.freecodecamp.org/news/tag/string-algorithms/)

---

## 🚀 Tips for Mastery

- Practice implementing string manipulation functions from scratch.
- Solve a variety of string problems, from easy to hard.
- Learn and use regular expressions effectively.
- Visualize how algorithms like KMP, Rabin-Karp, and Trie work.
- Benchmark performance for large strings and optimize accordingly.
- Teach or explain string concepts to someone else.

---

## 🗺️ Learning Roadmap

1. Master basic string operations and built-in methods.
2. Learn two pointers and sliding window techniques.
3. Practice hashing and anagram problems.
4. Study advanced algorithms (KMP, Trie, Rabin-Karp).
5. Explore real-world applications (NLP, search, parsing).
6. Review and optimize your solutions.
7. Teach or write about what you’ve learned.

---

Happy learning and coding! 🚀
