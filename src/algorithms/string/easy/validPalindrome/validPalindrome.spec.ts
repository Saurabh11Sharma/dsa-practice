import { validPalindrome } from './validPalindrome';

interface PalindromeTestCase {
  s: string;
  expected: boolean;
  description?: string;
}

const testCases: PalindromeTestCase[] = [
  {
    s: 'A man, a plan, a canal: Panama',
    expected: true,
    description: 'Classic palindrome with spaces and punctuation',
  },
  {
    s: 'race a car',
    expected: false,
    description: 'Not a palindrome',
  },
  {
    s: ' ',
    expected: true,
    description: 'Empty string after cleaning is a palindrome',
  },
  {
    s: 'No lemon, no melon',
    expected: true,
    description: 'Palindrome with spaces and mixed case',
  },
  {
    s: '0P',
    expected: false,
    description: 'Short string, not a palindrome',
  },
  {
    s: 'ab_a',
    expected: true,
    description: 'Palindrome with underscore (non-alphanumeric)',
  },
  {
    s: '.,!',
    expected: true,
    description: 'Only non-alphanumeric characters',
  },
  {
    s: 'Able was I, ere I saw Elba',
    expected: true,
    description: 'Famous palindrome phrase',
  },
  {
    s: 'abcba',
    expected: true,
    description: 'Odd length palindrome',
  },
  {
    s: 'abccba',
    expected: true,
    description: 'Even length palindrome',
  },
  {
    s: 'abcdefgfedcba',
    expected: true,
    description: 'Longer palindrome',
  },
  {
    s: 'abcdefg',
    expected: false,
    description: 'Longer non-palindrome',
  },
  // Large palindrome
  {
    s: 'a'.repeat(100_000) + 'b' + 'a'.repeat(100_000),
    expected: true,
    description: 'Very large palindrome (200001 chars)',
  },
  // Large non-palindrome
  {
    s: 'a'.repeat(100_000) + 'b' + 'a'.repeat(99_999) + 'c',
    expected: false,
    description: 'Very large non-palindrome (200001 chars)',
  },
];

describe('validPalindrome', () => {
  testCases.forEach(({ s, expected, description }, idx) => {
    const testName = description
      ? `${description} (len=${s.length})`
      : `Case ${idx + 1} (len=${s.length})`;

    it(testName, () => {
      expect(validPalindrome(s)).toBe(expected);
    });
  });
});
