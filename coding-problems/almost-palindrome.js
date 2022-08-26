// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 * Input: s = "abca"
 * Output: true
 *
 * Input: s = "abc"
 * Output: false
 *
 * Input: s = "abccdba"
 * Output: true
 */

const subPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isAlmostPalindrome = (str) => {
  str = str.replace(/[^A-za-z0-9]/g, '').toLowerCase();
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return subPalindrome(str, left + 1, right) || subPalindrome(str, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

console.log("isAlmostPalindrome('abccdba') :", isAlmostPalindrome('abccdba'));
console.log("isAlmostPalindrome('abca') :", isAlmostPalindrome('abca'));
console.log("isAlmostPalindrome('abc') :", isAlmostPalindrome('abc'));
console.log("isAlmostPalindrome('abcbdecba') :", isAlmostPalindrome('abcbdecba'));

/**
 * Time: O(n)
 * Space: O(1)
 */