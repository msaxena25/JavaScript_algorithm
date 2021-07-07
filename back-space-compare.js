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
const backSpaceCompare = (stringOne, stringTwo) => {
  const s = getFormattedString(stringOne);
  const t = getFormattedString(stringTwo);
  if (s === t) {
    return true;
  } else {
    return false;
  }
};

console.log("backSpaceCompare('aaa##c', '##ac') :", backSpaceCompare('aaa##c', '##ac'));
console.log("backSpaceCompare('a###c', 'ac') :", backSpaceCompare('a###c', 'ac'));
console.log("backSpaceCompare('qw#e#e#', '#####q') :", backSpaceCompare('qw#e#e#', '#####q'));

/************OPTIMAL SOLUTION ********************/

/**
 *
 * @param {*} s
 * @param {*} t
 * @returns
 */
const backSpaceCompareOptimalWay = (s, t) => {
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

console.log("backSpaceCompareOptimalWay('aaa##c', '##ac') :", backSpaceCompareOptimalWay('aaa##c', '##ac'));
console.log("backSpaceCompareOptimalWay('a###c', 'ac') :", backSpaceCompareOptimalWay('a###c', 'ac'));
console.log("backSpaceCompareOptimalWay('qw#e#e#', '#####q') :", backSpaceCompareOptimalWay('qw#e#e#', '#####q'));

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

const backSpaceCompareOptimalWayThirdWay = (s, t) => {
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

console.log("backSpaceCompareOptimalWayThirdWay('aaa##c', '##ac') :", backSpaceCompareOptimalWayThirdWay('aaa##c', '##ac'));
console.log("backSpaceCompareOptimalWayThirdWay('a###c', 'ac') :", backSpaceCompareOptimalWayThirdWay('a###c', 'ac'));
console.log("backSpaceCompareOptimalWayThirdWay('qw#e#e#', '#####q') :", backSpaceCompareOptimalWayThirdWay('qw#e#e#', '#####q'));

/**
 * Runtime: 68 ms
 * Memory Usage: 38.8 MB
 */