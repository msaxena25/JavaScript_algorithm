// https://leetcode.com/problems/container-with-most-water/

/**
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */

/**
 * FORMULA
 * area = width * height;
 * width > distance between two array values like distance between 1 and 2 is 3.
 * height > array value
 * containerArea = (j - i) * min(h1, h2)
 */
const containerMaxAreaFirstWay = (arr) => {
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const area = (j - i) * Math.min(arr[j], arr[i]);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

console.log('containerMaxAreaFirstWay([1,8,6,2,5,4,8,3,7]) :', containerMaxAreaFirstWay([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log('containerMaxAreaFirstWay([4,3,2,1,4]) :', containerMaxAreaFirstWay([4, 3, 2, 1, 4]));
console.log('containerMaxAreaFirstWay([1,2,1]) :', containerMaxAreaFirstWay([1, 2, 1]));

/**
 * Above program is working only for less number of items in array.
 * It gives time exceeded error when execute with very large numbers of array.
 */

/******* Optimal Solution ********/

const containerMaxAreaSecondWay = (arr) => {
  let maxArea = 0,
    i = 0,
    j = arr.length - 1;
  while (i < j) {
    const area = (j - i) * Math.min(arr[j], arr[i]); // width * height
    // console.log('area :', arr[i], arr[j], area);
    maxArea = Math.max(maxArea, area);
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};

console.log('containerMaxAreaSecondWay([1,8,6,2,5,4,8,3,7]) :', containerMaxAreaSecondWay([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log('containerMaxAreaSecondWay([4,3,2,1,4]) :', containerMaxAreaSecondWay([4, 3, 2, 1, 4]));
console.log('containerMaxAreaSecondWay([1,2,1]) :', containerMaxAreaSecondWay([1, 2, 1]));

/**
 * Runtime: 84 ms
 * Memory Usage: 47.7 MB,
 */
