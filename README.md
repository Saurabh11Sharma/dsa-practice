# DSA Practice Project

This project is designed to help you practice and master Data Structures and Algorithms (DSA) through hands-on problem-solving and coding exercises in TypeScript.

---

## 📁 Project Structure

The project is organized as follows:

```
dsa-practice
├── src
│   ├── problems
│   │   └── <problem>.ts         # Problem statements and descriptions
│   ├── solutions
│   │   └── <solution>.ts        # Solution implementations (your code goes here)
│   └── tests
│       └── <test>.spec.ts       # Test cases for each problem/solution
├── dist/                        # Compiled JavaScript output (auto-generated)
├── node_modules/                # npm dependencies (auto-generated)
├── package.json                 # npm configuration and scripts
├── tsconfig.json                # TypeScript configuration
├── .gitignore                   # Files and folders to ignore in git
└── README.md                    # Project documentation
```

---

## 📝 Workflow

1. **Define Problems:**  
   Write clear problem statements in `src/problems/`.

2. **Write Solutions:**  
   Implement your solution in `src/solutions/`.  
   Each solution file should export a function matching the problem.

3. **Create Tests:**  
   Add test cases in `src/tests/` using the provided test runner format.  
   Tests are dynamic and cover a range of input sizes (small to large), measuring both time and memory usage.

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

3. **Run all tests (compiles and executes all test files):**
   ```sh
   npm test
   ```

   > This will compile your TypeScript files and run all test cases in `src/tests/`, reporting pass/fail, execution time, and memory usage for each case.

---

## 🧪 Testing Details

- **Test files** are located in `src/tests/` and named `<problem>.spec.ts`.
- Each test file:
  - Dynamically generates test cases (small, large, random).
  - Measures execution time and memory usage for each case.
  - Compares results against ideal thresholds (configurable in each test file).
  - Prints a summary for each test case.

**Example output:**
```
Test case 1 (Small array, simple case): Passed | Time: 0.123 ms ✅ | Memory: 2.34 KB ✅
Test case 2 (Large array, size=100000): Passed | Time: 5.678 ms ✅ | Memory: 12.56 KB ✅
```

---

## 🏗️ Adding New Problems

1. **Add a problem statement:**  
   Create a new file in `src/problems/` (e.g., `twoSumProblem.ts`) and describe the problem.

2. **Add your solution:**  
   Create a corresponding file in `src/solutions/` (e.g., `twoSumProblem.ts`) and export your function.

3. **Add tests:**  
   Create a test file in `src/tests/` (e.g., `twoSumProblem.spec.ts`) and follow the dynamic test runner format.

---

## 🛠️ Scripts

- **Build the project:**  
  ```sh
  npm run build
  ```
  Compiles TypeScript files to `dist/`.

- **Run all tests:**  
  ```sh
  npm test
  ```
  Compiles and runs all test files in `src/tests/`.

---

## 🤝 Contributing

Contributions are welcome!  
You can add new problems, solutions, or improve test coverage. Please follow the existing structure for consistency.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🌐 Publishing to GitHub

1. [Create a new repository on GitHub](https://github.com/new).
2. Follow these commands in your project directory:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/<your-username>/dsa-practice.git
   git branch -M main
   git push -u origin main
   ```

---

Happy coding and learning! 🚀
