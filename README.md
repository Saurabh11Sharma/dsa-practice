[![GitHub stars](https://img.shields.io/github/stars/saurabh11sharma/dsa-practice.svg?style=social)](https://github.com/saurabh11sharma/dsa-practice/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/saurabh11sharma/dsa-practice.svg?style=social)](https://github.com/saurabh11sharma/dsa-practice/network)
[![GitHub issues](https://img.shields.io/github/issues/saurabh11sharma/dsa-practice.svg)](https://github.com/saurabh11sharma/dsa-practice/issues)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

# 📚 DSA Practice Project

This project is designed to help you **practice and master Data Structures and Algorithms (DSA)** through hands-on problem-solving and coding exercises in TypeScript.  
It is structured like a "DSA Book"—with categorized problems, detailed solutions, robust testing, and rich learning content.

---
⭐️ If you find this project helpful, please consider giving it a star!  
Your support helps others discover this resource and motivates further development.
---

## 📁 Project Structure

The project is organized as follows:

```
dsa-practice/
├── src/
│   ├── algorithms/
│   │   ├── <category>/                # e.g., hash-map, array, string, etc.
│   │   │   ├── <difficulty>/          # easy, medium, hard
│   │   │   │   ├── <problem>/         # e.g., twoSum, groupAnagrams
│   │   │   │   │   ├── <problem>.md      # Problem-specific README (theory, patterns, tips)
│   │   │   │   │   ├── <problem>.ts      # Solution implementation (TypeScript)
│   │   │   │   │   ├── <problem>.test.ts # Jest test file
│   │   │   │   │   └── notes/            # (optional) Empty folder for personal notes (.gitkeep)
│   ├── utils/
│   │   └── testUtils.ts                  # Shared test helpers (generators, validators)
├── package.json
├── tsconfig.json
├── jest.config.js
├── README.md
└── ... (other config files)
```

**Example:**
```
src/algorithms/hash-map/easy/twoSum/
  ├── twoSum.md
  ├── twoSum.ts
  ├── twoSum.test.ts
  └── notes/           # (optional, tracked with .gitkeep)
```

- **Empty folders** (such as `notes/`) are tracked using a `.gitkeep` file so they are included in the repository.

### 📂 Algorithm Categories

The `src/algorithms` folder contains the following categories (each with `easy`, `medium`, `hard` subfolders):

- `array`
- `backtracking`
- `binary-search`
- `bit-manipulation`
- `buffer`
- `caching`
- `design-patterns`
- `divide-and-conquer`
- `dynamic-programming`
- `error-handling`
- `event-loop`
- `file-system`
- `functional`
- `graph`
- `greedy`
- `hash-map`
- `hash-table`
- `heap`
- `linked-list`
- `map-set`
- `math`
- `networking`
- `node-api`
- `object`
- `oop`
- `promise-async`
- `queue`
- `recursion`
- `searching`
- `security`
- `sliding-window`
- `sorting`
- `stack`
- `stream`
- `string`
- `testing`
- `tree`
- `two-pointers`
- `web-api`

---

## 📝 Workflow

1. **Define Problems:**  
   Write clear problem statements and learning notes in `<problem>.md`.

2. **Write Solutions:**  
   Implement your solution in `<problem>.ts`.  
   Each solution file should export a function matching the problem.

3. **Create Tests:**  
   Add test cases in `<problem>.test.ts` using Jest and the provided test utilities.  
   Tests cover a range of input sizes (small to large), including random and edge cases.

4. **(Optional) Add Notes:**  
   Use the `notes/` folder inside each problem for personal notes, scratch work, or additional resources.  
   Add a `.gitkeep` file to ensure the folder is tracked by git.

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/saurabh11sharma/dsa-practice.git
   cd dsa-practice
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run all tests:**
   ```sh
   npm test
   ```
   > Runs all `.test.ts` and `.spec.ts` files using Jest.

---

## 🧪 Testing Philosophy

- **Jest** is used for all tests.
- **Test files** are colocated with solutions for clarity.
- **Test cases** include:
  - Small/edge cases
  - Large arrays for performance
  - Randomized cases for robustness (with deterministic seeds if needed)
- **Helpers** in `testUtils.ts` make it easy to generate and validate cases.

---

## 🏗️ Adding New Problems

1. **Add a problem statement:**  
   Create a new folder in the appropriate category/difficulty (e.g., `src/algorithms/hash-map/easy/twoSum/`) and add `<problem>.md` for the description and learning notes.

2. **Add your solution:**  
   Implement your solution in `<problem>.ts` in the same folder.

3. **Add tests:**  
   Create a test file `<problem>.test.ts` in the same folder and use the shared test utilities for consistency.

4. **(Optional) Add notes:**  
   Create a `notes/` folder inside the problem directory and add a `.gitkeep` file if you want to track empty folders for personal notes.

---

## 📚 Learning Content & References

- **Project Learning READMEs:**
  - [Two Sum (Hash Map, Easy)](src/algorithms/hash-map/easy/twoSum/twoSum.md)
  - [Two Sum II (Two Pointers, Easy)](src/algorithms/two-pointers/easy/twoSumII/twoSumII.md)
  - More coming soon in each algorithm/topic folder!

- **Recommended External Resources:**
  - [LeetCode Explore - Top Interview 150](https://leetcode.com/studyplan/top-interview-150/)
  - [NeetCode Patterns](https://neetcode.io/roadmap)
  - [GeeksforGeeks DSA Sheet](https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/)
  - [freeCodeCamp DSA Curriculum](https://www.freecodecamp.org/learn/)
  - [MIT OpenCourseWare - Introduction to Algorithms](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/)
  - [CS50 Harvard - Data Structures](https://cs50.harvard.edu/x/2024/weeks/5/)
  - [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
  - [LeetCode Discuss - Patterns](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)

---

## 🏆 What You'll Learn

- **Core DSA Patterns:** Hashing, two pointers, sliding window, binary search, recursion, dynamic programming, and more.
- **How to Analyze Complexity:** Understand and compare time/space trade-offs.
- **How to Write Clean Code:** Idiomatic TypeScript, clear interfaces, and maintainable structure.
- **How to Test Effectively:** Write robust, scalable, and meaningful tests.
- **How to Communicate Solutions:** Each README is a mini-lesson, helping you explain your approach in interviews.

---

## 📚 Table of Contents

- [Array Problems](src/algorithms/array/)
- [Backtracking Problems](src/algorithms/backtracking/)
- [Binary Search Problems](src/algorithms/binary-search/)
- [Bit Manipulation Problems](src/algorithms/bit-manipulation/)
- [Buffer Problems](src/algorithms/buffer/)
- [Caching Problems](src/algorithms/caching/)
- [Design Patterns](src/algorithms/design-patterns/)
- [Divide and Conquer](src/algorithms/divide-and-conquer/)
- [Dynamic Programming](src/algorithms/dynamic-programming/)
- [Error Handling](src/algorithms/error-handling/)
- [Event Loop](src/algorithms/event-loop/)
- [File System](src/algorithms/file-system/)
- [Functional Programming](src/algorithms/functional/)
- [Graph Problems](src/algorithms/graph/)
- [Greedy Algorithms](src/algorithms/greedy/)
- [Hash Map Problems](src/algorithms/hash-map/)
  - [Two Sum](src/algorithms/hash-map/easy/twoSum/twoSum.md)
- [Hash Table Problems](src/algorithms/hash-table/)
- [Heap Problems](src/algorithms/heap/)
- [Linked List Problems](src/algorithms/linked-list/)
- [Map/Set Problems](src/algorithms/map-set/)
- [Math Problems](src/algorithms/math/)
- [Networking](src/algorithms/networking/)
- [Node.js API](src/algorithms/node-api/)
- [Object Problems](src/algorithms/object/)
- [OOP Patterns](src/algorithms/oop/)
- [Promise & Async](src/algorithms/promise-async/)
- [Queue Problems](src/algorithms/queue/)
- [Recursion](src/algorithms/recursion/)
- [Searching](src/algorithms/searching/)
- [Security](src/algorithms/security/)
- [Sliding Window](src/algorithms/sliding-window/)
- [Sorting](src/algorithms/sorting/)
- [Stack Problems](src/algorithms/stack/)
- [Stream](src/algorithms/stream/)
- [String Problems](src/algorithms/string/)
- [Testing](src/algorithms/testing/)
- [Tree Problems](src/algorithms/tree/)
- [Two Pointers Problems](src/algorithms/two-pointers/)
  - [Two Sum II](src/algorithms/two-pointers/easy/twoSumII/twoSumII.md)
- [Web API](src/algorithms/web-api/)
- [More Coming Soon!](#contributing)

Each folder will have its own README for deep dives into that topic or pattern.

---

## 🛠️ Scripts

- **Build:**  
  `npm run build` — Compiles TypeScript to `dist/`.
- **Test:**  
  `npm test` — Runs all Jest tests.
- **Lint:**  
  `npm run lint` — Lints all code with ESLint (including `src/` and `scripts/`).
- **Format:**  
  `npm run format` — Checks formatting with Prettier (including `src/` and `scripts/`).
- **Format Fix:**  
  `npm run format:fix` — Auto-formats code and markdown.
- **Benchmarks:**  
  `npm run benchmarks` — Runs all `*.benchmark.ts` files (across all folders) using Benchmark.js and prints a detailed performance table for each problem and input pattern.

---

## ⚡ Benchmarking

This project includes **robust, automated benchmarking** for all solutions:

- **How to run:**  
  ```sh
  npm run benchmarks
  ```
- **What it does:**
  - Finds and runs all `*.benchmark.ts` files (wherever they are in the repo).
  - Benchmarks each solution on a variety of input sizes and patterns (sorted, reverse, random, edge cases).
  - Prints a table for each problem with:
    - Case name
    - Operations per second (`ops/sec`)
    - Average time per operation (`ms/op`)
    - Relative margin of error (`±RME`)
    - Number of samples
  - Prints a summary of the fastest and slowest cases for each problem.

- **Sample output:**

  Benchmarking twoSum on various input patterns and sizes...

  | Case                | ops/sec   | ms/op   | ±RME   | samples |
  |---------------------|----------:|--------:|-------:|--------:|
  | Sequential (n=100)  | 50000.00  | 0.0200  | ±1.23% |     100 |
  | Reverse (n=100)     | 48000.00  | 0.0208  | ±1.10% |     100 |
  | Random (n=100)      | 47000.00  | 0.0213  | ±1.15% |     100 |
  | ...                 | ...       | ...     | ...    |    ...  |

  **Fastest:**  Sequential (n=100) (0.0200 ms/op)  
  **Slowest:**  Random (n=100000) (2.5000 ms/op)

- **Why this matters:**  
  - Lets you see how each solution scales and performs on different input types.
  - Makes it easy to compare performance and spot bottlenecks.
  - Great for learning, optimization, and interview prep.

---

## 🤝 Contributing

Contributions are welcome!  
You can add new problems, solutions, improve test coverage, or add benchmarks.
**How to contribute:**
1. Fork the repo and create a new branch.
2. Add your problem/solution/test in the correct folder.
3. Add or update the relevant README.
4. Open a pull request with a clear description.

**Guidelines:**
- Follow the existing folder and file structure.
- Write clear, commented code and tests.
- Add learning notes and references in each problem’s README.
- If you add a new empty folder (e.g., for notes), include a `.gitkeep` file so it is tracked by git.

---

## 💡 Tips for Effective DSA Practice

- **Don’t just code—explain!** Write out your reasoning in the README.
- **Try multiple approaches:** Brute force, optimal, and alternatives.
- **Test edge cases:** Empty arrays, duplicates, negatives, large inputs.
- **Review patterns:** Recognize when to use hash maps, two pointers, etc.
- **Reflect:** After solving, write down what you learned and what you’d do differently.
- **Benchmark your code:** Use the built-in benchmarking to see how your solution performs!

---

## 💬 FAQ

**Q: Can I use this project for interview prep?**  
A: Absolutely! The structure, explanations, and test coverage are designed for real-world interviews.

**Q: How do I add a new algorithm or pattern?**  
A: Create a new folder under `src/algorithms/<category>/<difficulty>/<problem>/` and follow the template.  
If you want to track an empty folder (e.g., for notes), add a `.gitkeep` file inside it.

**Q: Can I use JavaScript instead of TypeScript?**  
A: The project is TypeScript-first for type safety, but you can adapt solutions to JavaScript if needed.

**Q: How do I run only one test file?**  
A: Use Jest’s pattern matching, e.g.:
```sh
npx jest src/algorithms/hash-map/easy/twoSum/twoSum.test.ts
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🌟 Happy Learning and Coding!

---
⭐️ If you find this project helpful, please consider giving it a star!  
Your support helps others discover this resource and motivates further development.
---
