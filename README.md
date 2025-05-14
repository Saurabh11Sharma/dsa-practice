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
│   │   ├── <category>/
│   │   │   ├── <difficulty>/
│   │   │   │   ├── <problem>/
│   │   │   │   │   ├── <problem>.md      # Problem-specific README (theory, patterns, tips)
│   │   │   │   │   ├── <problem>.ts      # Solution implementation
│   │   │   │   │   └── <problem>.test.ts # Jest test file
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
  └── twoSum.test.ts
```

---

## 📝 Workflow

1. **Define Problems:**  
   Write clear problem statements and learning notes in `<problem>.md`.

2. **Write Solutions:**  
   Implement your solution in `<problem>.ts`.  
   Each solution file should export a function matching the problem.

3. **Create Tests:**  
   Add test cases in `<problem>.test.ts` using Jest and the provided test utilities.  
   Tests cover a range of input sizes (small to large), including random and edge cases, and can measure both time and memory usage.

---

## 🚀 Getting Started

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
   > Reports pass/fail, and you can add time/memory checks if desired.

---

## 🧪 Testing Philosophy

- **Jest** is used for all tests.
- **Test files** are colocated with solutions for clarity.
- **Test cases** include:
  - Small/edge cases
  - Large arrays for performance
  - Randomized cases for robustness (with deterministic seeds if needed)
- **Helpers** in `testUtils.ts` make it easy to generate and validate cases.
- **Time and memory checks** can be included for performance-sensitive problems.

---

## 🏗️ Adding New Problems

1. **Add a problem statement:**  
   Create a new folder in the appropriate category/difficulty (e.g., `src/algorithms/hash-map/easy/twoSum/`) and add `<problem>.md` for the description and learning notes.

2. **Add your solution:**  
   Implement your solution in `<problem>.ts` in the same folder.

3. **Add tests:**  
   Create a test file `<problem>.test.ts` in the same folder and use the shared test utilities for consistency.

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

- [Hash Map Problems](src/algorithms/hash-map/)
  - [Two Sum](src/algorithms/hash-map/easy/twoSum/twoSum.md)
- [Two Pointers Problems](src/algorithms/two-pointers/)
  - [Two Sum II](src/algorithms/two-pointers/easy/twoSumII/twoSumII.md)
- [More Coming Soon!](#contributing)

Each folder will have its own README for deep dives into that topic or pattern.

---

## 🛠️ Scripts

- **Build:**  
  `npm run build` — Compiles TypeScript to `dist/`.
- **Test:**  
  `npm test` — Runs all Jest tests.
- **Lint:**  
  `npm run lint` — Lints all code with ESLint.
- **Format:**  
  `npm run format` — Checks formatting with Prettier.
- **Format Fix:**  
  `npm run format:fix` — Auto-formats code and markdown.

---

## 🤝 Contributing

Contributions are welcome!  
You can add new problems, solutions, or improve test coverage.  
**How to contribute:**
1. Fork the repo and create a new branch.
2. Add your problem/solution/test in the correct folder.
3. Add or update the relevant README.
4. Open a pull request with a clear description.

**Guidelines:**
- Follow the existing folder and file structure.
- Write clear, commented code and tests.
- Add learning notes and references in each problem’s README.

---

## 💡 Tips for Effective DSA Practice

- **Don’t just code—explain!** Write out your reasoning in the README.
- **Try multiple approaches:** Brute force, optimal, and alternatives.
- **Test edge cases:** Empty arrays, duplicates, negatives, large inputs.
- **Review patterns:** Recognize when to use hash maps, two pointers, etc.
- **Reflect:** After solving, write down what you learned and what you’d do differently.

---

## 💬 FAQ

**Q: Can I use this project for interview prep?**  
A: Absolutely! The structure, explanations, and test coverage are designed for real-world interviews.

**Q: How do I add a new algorithm or pattern?**  
A: Create a new folder under `src/algorithms/<category>/<difficulty>/<problem>/` and follow the template.

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
