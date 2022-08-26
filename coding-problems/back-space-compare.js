// https://leetcode.com/problems/backspace-string-compare/

const getFormattedString = (input) => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '#') {
      output.pop();
    } else {
      output.push(input[i]);
    }
  }
  return output.join('');
};
const backSpaceCompareFirstWay = (stringOne, stringTwo) => {
  const s = getFormattedString(stringOne);
  const t = getFormattedString(stringTwo);
  if (s === t) {
    return true;
  } else {
    return false;
  }
};

console.log("backSpaceCompareFirstWay('aaa##c', '##ac') :", backSpaceCompareFirstWay('aaa##c', '##ac'));
console.log("backSpaceCompareFirstWay('a###c', 'ac') :", backSpaceCompareFirstWay('a###c', 'ac'));
console.log("backSpaceCompareFirstWay('qw#e#e#', '#####q') :", backSpaceCompareFirstWay('qw#e#e#', '#####q'));

/************OPTIMAL SOLUTION ********************/

/**
 *
 * @param {*} s
 * @param {*} t
 * @returns
 * We have used here two pointer technique.
 * First pointer p1 is first string's last index and p2 is second string's last index.
 * Use while loop till p1 and p2 are greater than or equal to 0.
 * Note: One # means - we have to move back our pointer by 2 index.
 * If current char is #, create a variable hashBackCounter with value 2.
 * Reduce this variable value by 1 while it becomes 0 and reduce pointer as well.
 * In case after reducing pointer by one, next char is also #, then increment hashBackCounter by 2 again.
 * Same steps repeat for second string as well.
 * Now at last check chars at same indices and if they are not same, return false else reduce both p1 and p2 by 1.
 * Last line return true.
 */
const backSpaceCompareSecondWay = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#') {
      let hashBackCounter = 2; // one # means move pointer 2 place back
      while (hashBackCounter > 0) {
        hashBackCounter--;
        p1--;
        if (s[p1] === '#') {
          hashBackCounter += 2;
        }
      }
    }
    if (t[p2] === '#') {
      let hashBackCounter = 2;
      while (hashBackCounter > 0) {
        p2--;
        hashBackCounter--;
        if (t[p2] === '#') {
          hashBackCounter += 2;
        }
      }
    }
    if (s[p1] !== t[p2]) {
      return false;
    } else {
      p1--;
      p2--;
    }
  }
  return true;
};

/**
 * Runtime: 76 ms
 * Memory Usage: 38.8 MB
 */

console.log("backSpaceCompareSecondWay('aaa##c', '##ac') :", backSpaceCompareSecondWay('aaa##c', '##ac'));
console.log("backSpaceCompareSecondWay('a###c', 'ac') :", backSpaceCompareSecondWay('a###c', 'ac'));
console.log("backSpaceCompareSecondWay('qw#e#e#', '#####q') :", backSpaceCompareSecondWay('qw#e#e#', '#####q'));

/********************  */

const getHashBackPointer = (input, p) => {
  if (input[p] === '#') {
    let hashBackCounter = 2;
    while (hashBackCounter > 0) {
      hashBackCounter--;
      p--;
      if (input[p] === '#') {
        hashBackCounter += 2;
      }
    }
  }
  return p;
};

const backSpaceCompareThirdWay = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    p1 = getHashBackPointer(s, p1);
    p2 = getHashBackPointer(t, p2);
    if (s[p1] !== t[p2]) {
      return false;
    } else {
      p1--;
      p2--;
    }
  }
  return true;
};

console.log("backSpaceCompareThirdWay('aaa##c', '##ac') :", backSpaceCompareThirdWay('aaa##c', '##ac'));
console.log("backSpaceCompareThirdWay('a###c', 'ac') :", backSpaceCompareThirdWay('a###c', 'ac'));
console.log("backSpaceCompareThirdWay('qw#e#e#', '#####q') :", backSpaceCompareThirdWay('qw#e#e#', '#####q'));

/**
 * Runtime: 68 ms
 * Memory Usage: 38.8 MB
 */