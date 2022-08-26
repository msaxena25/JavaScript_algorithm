// https://leetcode.com/problems/two-sum/

const getTwoSumFirstWay = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log('getTwoSumFirstWay([2,7,11,15], 9) :', getTwoSumFirstWay([2, 7, 11, 15], 9));
console.log('getTwoSumFirstWay([2,7,1,9,7], 11) :', getTwoSumFirstWay([2, 7, 1, 9, 7], 11));
console.log('getTwoSumFirstWay([2,7,11,15], 19) :', getTwoSumFirstWay([2, 7, 11, 15], 19));

/**
 * Runtime: 120 ms
 * Memory Usage: 39.2 MB
 */

const getTwoSumSecondWay = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const findNum = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === findNum) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log('getTwoSumSecondWay([2,7,11,15], 9) :', getTwoSumSecondWay([2, 7, 11, 15], 9));
console.log('getTwoSumSecondWay([2,7,1,9,7], 11) :', getTwoSumSecondWay([2, 7, 1, 9, 7], 11));
console.log('getTwoSumSecondWay([2,7,11,15], 19) :', getTwoSumSecondWay([2, 7, 11, 15], 19));

/**
 * Runtime: 120 ms
 * Memory Usage: 39.2 MB
 */

const getTwoSumThirdWay = (arr, target) => {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]] > -1) {
      return [store[arr[i]], i];
    } else {
      const findNum = target - arr[i];
      store[findNum] = i;
    }
  }
  return [];
};

console.log('getTwoSumThirdWay([2,7,11,15], 9) :', getTwoSumThirdWay([2, 7, 11, 15], 9));
console.log('getTwoSumThirdWay([2,7,1,9,7], 11) :', getTwoSumThirdWay([2, 7, 1, 9, 7], 11));
console.log('getTwoSumThirdWay([2,7,11,15], 19) :', getTwoSumThirdWay([2, 7, 11, 15], 19));

/**
 * Runtime: 80 ms
 * Memory Usage: 40.4 MB
 */
