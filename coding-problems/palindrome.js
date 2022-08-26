// https://leetcode.com/problems/valid-palindrome/

/**
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 */

const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // remove all special chars
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log("isPalindrome('A man, a plan, a canal: Panama') :", isPalindrome('A man, a plan, a canal: Panama'));
console.log("isPalindrome('race a car') :", isPalindrome('race a car'));
console.log("isPalindrome('abcdba') :", isPalindrome('abcdba'));

/**
 * Time: O(n)
 * Space: O(1)
 */
