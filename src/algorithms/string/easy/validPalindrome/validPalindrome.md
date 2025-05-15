# ✅ Valid Palindrome

## 📝 Problem Statement

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

---

## 📌 Examples

### Example 1

```ts
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

### Example 2

```ts
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

### Example 3

```ts
Input: s = " "
Output: true
Explanation: After removing non-alphanumeric characters, we’re left with an empty string.
```

### 🧪 Additional Test Cases

```ts
Input: s = '0P';
Output: false;

Input: s = 'ab_a';
Output: true;

Input: s = '.,!';
Output: true;

Input: s = 'Able was I, ere I saw Elba';
Output: true;

Input: s = 'No lemon, no melon';
Output: true;
```

---

## ✅ Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

---

## 💡 Hints

- Use two pointers: one from the beginning (`left`), one from the end (`right`).
- Skip non-alphanumeric characters using regex or character checks.
- Compare lowercased characters to handle case insensitivity.

---

## 🧠 Approach

1. **Initialize two pointers:** `left = 0` and `right = s.length - 1`.
2. **While `left < right`:**
   - Skip non-alphanumeric characters on both ends.
   - Compare characters at `left` and `right` (after lowercasing).
   - If they don’t match, return `false`.
   - Move `left` and `right` toward each other.
3. **If the loop completes without mismatches, return `true`.**

### Alternative Approach

- Clean the string using regex: remove non-alphanumeric characters and lowercase everything.
- Check if the cleaned string is equal to its reverse.
- This uses O(n) extra space.

---

## 🧮 Complexity Analysis

| Type  | Complexity                                       |
| ----- | ------------------------------------------------ |
| Time  | O(n) – each character is visited at most once    |
| Space | O(1) – constant space usage (ignores input size) |

---

## 🔍 Pattern Recognition

- **Pattern:** Two Pointers
- **Variants:** Could also use a cleaned version of the string and check with `.split('').reverse().join('')`, but that uses O(n) space.

---

## 🧩 Related Topics

- Two Pointers
- Strings
- Regex / Character Filtering

---

## 🔁 Follow-Up Questions

- Can you do this in one pass?
- What if Unicode characters are allowed?
- How would you handle stream-based input?
- How would you optimize for very large strings?

---

## 🧑‍💻 Function Signature

```ts
function isValidPalindrome(s: string): boolean;
```

---

## 📝 Example Solution (TypeScript)

### Two Pointers Approach

```ts
function isValidPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}

function isAlphaNum(c: string): boolean {
  return /[a-zA-Z0-9]/.test(c);
}
```

### Cleaned String Approach

```ts
function isValidPalindrome(s: string): boolean {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
```

---

## 📚 Further Reading

- [Palindrome - Wikipedia](https://en.wikipedia.org/wiki/Palindrome)
- [LeetCode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [Two Pointers Pattern - Educative](https://www.educative.io/courses/grokking-the-coding-interview/gx6oOQ3A0kA)

---
