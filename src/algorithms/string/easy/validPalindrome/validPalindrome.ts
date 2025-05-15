/**
 * Problem: Valid Palindrome
 * Difficulty: Easy
 * Category: Strings / Two Pointers
 *
 * 📝 Problem Statement:
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
 *
 * ⏱ Constraints:
 * - 1 <= s.length <= 2 * 10^5
 * - s consists only of printable ASCII characters.
 *
 * ✅ Example:
 * Input:
 *   s = "A man, a plan, a canal: Panama"
 * Output:
 *   true
 * Explanation:
 *   "amanaplanacanalpanama" is a palindrome.
 *
 * 🧪 Additional Test Cases:
 * Test Case 1:
 *   s = "race a car"
 *   Expected Output: false
 *
 * Test Case 2:
 *   s = " "
 *   Expected Output: true
 *
 * Test Case 3:
 *   s = "No lemon, no melon"
 *   Expected Output: true
 */

/**
 * Checks if a given string is a valid palindrome, considering only alphanumeric characters and ignoring cases.
 * @param s - The input string to check.
 * @returns True if the string is a palindrome, false otherwise.
 * @example
 * validPalindrome("A man, a plan, a canal: Panama") // returns true
 */
export function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (!isAlphaNumeric(leftChar)) {
      left++;
    } else if (!isAlphaNumeric(rightChar)) {
      right--;
    } else {
      if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }

  return true;
}

function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}
