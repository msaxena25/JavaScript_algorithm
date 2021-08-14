// https://leetcode.com/problems/valid-parentheses/

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

/**
 * Input: s = "()[]{}"
   Output: true
 */

const isValidParentheses = (str) => {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const store = []; // store here open braces
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      store.push(str[i]);
    } else {
      const openBraces = store.pop();
      if (obj[openBraces] !== str[i]) {
        return false;
      }
    }
  }
  return store.length === 0;
};

console.log("isValidParentheses('()[](){}{{}}') :", isValidParentheses('()[](){}{{}}'));
console.log("isValidParentheses('[]{{}})()') :", isValidParentheses('[]{{}})()'));
console.log("isValidParentheses('') :", isValidParentheses(''));
console.log("isValidParentheses(')') :", isValidParentheses(')'));
console.log("isValidParentheses('[({})[(){}]]') :", isValidParentheses('[({})[(){}]]'));

const isValidParenthesesSecondWay = (str) => {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const store = []; // store here open braces
  let i = 0;
  while (i < str.length) {
    if (obj[str[i]]) {
      store.push(str[i]);
    } else {
      const openBraces = store.pop();
      if (obj[openBraces] !== str[i]) {
        return false;
      }
    }
    i++;
  }
  return store.length === 0;
};

console.log("isValidParenthesesSecondWay('()[](){}{{}}') :", isValidParenthesesSecondWay('()[](){}{{}}'));
console.log("isValidParenthesesSecondWay('[]{{}})()') :", isValidParenthesesSecondWay('[]{{}})()'));
console.log("isValidParenthesesSecondWay('') :", isValidParenthesesSecondWay(''));
console.log("isValidParenthesesSecondWay(')') :", isValidParenthesesSecondWay(')'));
console.log("isValidParenthesesSecondWay('[({})[(){}]]') :", isValidParenthesesSecondWay('[({})[(){}]]'));

/** For both above program
 * Time: O(n)
 * Space: O(n)
 */
