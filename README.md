[![GitHub stars](https://img.shields.io/github/stars/saurabh11sharma/dsa-practice.svg?style=social)](https://github.com/saurabh11sharma/dsa-practice/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/saurabh11sharma/dsa-practice.svg?style=social)](https://github.com/saurabh11sharma/dsa-practice/network)
[![GitHub issues](https://img.shields.io/github/issues/saurabh11sharma/dsa-practice.svg)](https://github.com/saurabh11sharma/dsa-practice/issues)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

# 📚 DSA Practice Project

This project helps you **practice and master Data Structures and Algorithms (DSA)** through hands-on problem-solving and coding exercises in TypeScript.  
It is structured like a "DSA Book"—with categorized problems, detailed solutions, robust testing, and rich learning content.

---

## 📑 Table of Contents

- [How to Use This Repo](#-how-to-use-this-repo)
- [Project Structure](#-project-structure)
- [Algorithm Categories](#-algorithm-categories)
- [Workflow](#-workflow)
- [Getting Started](#getting-started)
- [Testing Philosophy](#-testing-philosophy)
- [Adding New Problems](#-adding-new-problems)
- [Learning Content & References](#-learning-content--references)
- [What You'll Learn](#-what-youll-learn)
- [Table of Contents (Algorithms)](#-table-of-contents-algorithms)
- [Scripts](#-scripts)
- [Benchmarking](#-benchmarking)
- [Contributing](#-contributing)
- [Tips for Effective DSA Practice](#-tips-for-effective-dsa-practice)
- [FAQ](#-faq)
- [License](#-license)
- [Contact & Support](#-contact--support)

---

## 🚀 How to Use This Repo

1. **Browse Algorithm Categories:**  
   Use the [Algorithm Categories](#-algorithm-categories) section below to jump to any topic. Each category has its own README with theory, patterns, and references.

2. **Read the Category README:**  
   Start with the category README to understand the core concepts, pros/cons, and common pitfalls.

3. **Pick a Problem:**  
   Choose a problem from the category folder. Read the problem statement and notes.

4. **Solve and Test:**  
   Implement your solution in TypeScript, write tests, and run them using Jest.

5. **Benchmark (Optional):**  
   Use the built-in benchmarking tools to compare solution performance.

6. **Reflect and Document:**  
   Write down your approach, edge cases, and what you learned in the problem’s markdown file.

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

> **Navigation Tip:**  
> - [Algorithm Categories](#-algorithm-categories) links to each category’s overview/notes.  
> - [Table of Contents (Algorithms)](#-table-of-contents-algorithms) links to problem folders for direct access to code and solutions.

---

## 📂 Algorithm Categories

> 📖 **Each algorithm category folder contains a detailed README with theory, patterns, pros/cons, pitfalls, and references. Use these as your quick reference before diving into problems!**

- [Array](src/algorithms/array/README.md)
- [Backtracking](src/algorithms/backtracking/README.md)
- [Binary Search](src/algorithms/binary-search/README.md)
- [Bit Manipulation](src/algorithms/bit-manipulation/README.md)
- [Buffer](src/algorithms/buffer/README.md)
- [Caching](src/algorithms/caching/README.md)
- [Design Patterns](src/algorithms/design-patterns/README.md)
- [Divide and Conquer](src/algorithms/divide-and-conquer/README.md)
- [Dynamic Programming](src/algorithms/dynamic-programming/README.md)
- [Error Handling](src/algorithms/error-handling/README.md)
- [Event Loop](src/algorithms/event-loop/README.md)
- [File System](src/algorithms/file-system/README.md)
- [Functional](src/algorithms/functional/README.md)
- [Graph](src/algorithms/graph/README.md)
- [Greedy](src/algorithms/greedy/README.md)
- [Hash Map](src/algorithms/hash-map/README.md)
- [Hash Table](src/algorithms/hash-table/README.md)
- [Heap](src/algorithms/heap/README.md)
- [Linked List](src/algorithms/linked-list/README.md)
- [Map/Set](src/algorithms/map-set/README.md)
- [Math](src/algorithms/math/README.md)
- [Networking](src/algorithms/networking/README.md)
- [Node.js API](src/algorithms/node-api/README.md)
- [Object](src/algorithms/object/README.md)
- [OOP](src/algorithms/oop/README.md)
- [Promise & Async](src/algorithms/promise-async/README.md)
- [Queue](src/algorithms/queue/README.md)
- [Recursion](src/algorithms/recursion/README.md)
- [Searching](src/algorithms/searching/README.md)
- [Security](src/algorithms/security/README.md)
- [Sliding Window](src/algorithms/sliding-window/README.md)
- [Sorting](src/algorithms/sorting/README.md)
- [Stack](src/algorithms/stack/README.md)
- [Stream](src/algorithms/stream/README.md)
- [String](src/algorithms/string/README.md)
- [Testing](src/algorithms/testing/README.md)
- [Tree](src/algorithms/tree/README.md)
- [Two Pointers](src/algorithms/two-pointers/README.md)
- [Web API](src/algorithms/web-api/README.md)

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
  - [LeetCode Patterns (Discuss)](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)
  - [NeetCode Roadmap & Patterns](https://neetcode.io/roadmap)
  - [GeeksforGeeks DSA Sheet by Love Babbar](https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/)
  - [GeeksforGeeks DSA Topic List](https://www.geeksforgeeks.org/data-structures/)
  - [freeCodeCamp DSA Curriculum](https://www.freecodecamp.org/learn/)
  - [MIT OpenCourseWare - Introduction to Algorithms (6.006)](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/)
  - [CS50 Harvard - Data Structures](https://cs50.harvard.edu/x/2024/weeks/5/)
  - [Big-O Complexity Cheat Sheet](https://www.bigocheatsheet.com/)
  - [VisuAlgo - Visualize Algorithms](https://visualgo.net/en)
  - [AlgoExpert Patterns List](https://www.algoexpert.io/patterns)
  - [YouTube: WilliamFiset Data Structures](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsD06x59fxczdWLhJJ2t-8bU)
  - [YouTube: freeCodeCamp.org - DSA Course](https://www.youtube.com/watch?v=8hly31xKli0)
  - [InterviewBit DSA Topics](https://www.interviewbit.com/courses/programming/)
  - [Stanford CS97SI: Competitive Programming and Problem Solving](https://web.stanford.edu/class/cs97si/)
  - [Princeton Algorithms, Part I & II (Coursera)](https://www.coursera.org/specializations/algorithms)

---

## 🏆 What You'll Learn

- **Core DSA Patterns:** Hashing, two pointers, sliding window, binary search, recursion, dynamic programming, and more.
- **How to Analyze Complexity:** Understand and compare time/space trade-offs.
- **How to Write Clean Code:** Idiomatic TypeScript, clear interfaces, and maintainable structure.
- **How to Test Effectively:** Write robust, scalable, and meaningful tests.
- **How to Communicate Solutions:** Each README is a mini-lesson, helping you explain your approach in interviews.

---

## 📚 Table of Contents (Algorithms)

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

Each folder has its own README for deep dives into that topic or pattern.

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

## 📬 Contact & Support

- For questions, suggestions, or bug reports, please [open an issue](https://github.com/saurabh11sharma/dsa-practice/issues).
- You can also reach out via GitHub Discussions or connect on [LinkedIn](https://www.linkedin.com/in/saurabh11sharma/).

---

⭐️ If you find this project helpful, please consider giving it a star!  
Your support helps others discover this resource and motivates further development.
