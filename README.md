# DSA Practice Project

This project is designed to help you practice and learn Data Structures and Algorithms (DSA) through problem-solving and coding exercises.

## Project Structure

The project is organized into the following directories and files:

```
dsa-practice
├── src
│   ├── problems
│   │   └── exampleProblem.ts      # Defines a sample problem
│   ├── solutions
│   │   └── exampleSolution.ts      # Contains the solution to the problem
│   └── tests
│       └── exampleTest.ts          # Includes test cases for the solution
├── package.json                     # Configuration file for npm
├── tsconfig.json                   # TypeScript configuration file
└── README.md                        # Project documentation
```

## Problem Definition

The project includes a sample problem defined in `src/problems/exampleProblem.ts`. This problem includes:

- **ID**: A unique identifier for the problem.
- **Description**: A detailed explanation of the problem to be solved.
- **Constraints**: Any constraints that must be considered when solving the problem.

## Solution

The solution to the problem is implemented in `src/solutions/exampleSolution.ts`. The solution includes:

- A function `solveProblem` that takes input parameters and returns the solution to the defined problem.

## Testing

Test cases for the solution can be found in `src/tests/exampleTest.ts`. The test file includes:

- A function `runTests` that executes various test cases and asserts the expected outcomes to ensure the solution works as intended.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Compile the TypeScript files by running:
   ```
   npx tsc
   ```
5. Run the tests to verify the solution:
   ```
   node dist/tests/exampleTest.js
   ```

## Contributing

Feel free to contribute to this project by adding new problems, solutions, or test cases. Make sure to follow the project structure for consistency.

## License

This project is open-source and available under the MIT License.