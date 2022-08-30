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

// returning pair of indices
const getTwoSumSecondWay = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        const remainingSum = target - arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === remainingSum) {
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

// By storing sum and index values in an object, returning pair of indices
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

// Find pair of number using two pointer technique
const getTwoSumWithTwoPointer = (arr, target) => {
    arr.sort((a, b) => a - b);
    const map = {};
    const out = [];
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum === target) {
            const str = `${arr[i]},${arr[j]}}`;
            if (!map[str]) {
                out.push([arr[i], arr[j]]);
                map[str] = true;
            }
            i++;
            j--;
        } else if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        }
    }
    return out;
};

console.log('getTwoSumWithTwoPointer([2, 7, 11, 15, 8, 1, 1, 8], 9) :', getTwoSumWithTwoPointer([2, 7, 11, 15, 8, 1, 1, 8], 9));
console.log('getTwoSumWithTwoPointer([2, 7, 1, 9, 7, 0, 5, 3], 9) :', getTwoSumWithTwoPointer([2, 7, 1, 9, 7, 0, 5, 3], 8));
console.log('getTwoSumWithTwoPointer([3, -1, -7, 0, 2, 4, -3, -5, -4, -4], -8) :', getTwoSumWithTwoPointer([3, -1, -7, 0, 2, 4, -3, -5, -4, -4], -8));

/**
 * Runtime: 80 ms
 * Memory Usage: 40.4 MB
 */
