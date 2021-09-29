// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
    Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]

    Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]

    Example 3:

    Input: nums = [], target = 0
    Output: [-1,-1]
*/

const binarySearch = function (arr, left, right, target) {
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    if (target === mid) {
      return midIndex;
    } else if (target > mid) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
};

const findFirstAndLastIndex = (arr, target) => {
  if (arr.length === 0) {
    return [-1, -1];
  }
  // Find element's position and assign it into first position
  let firstPosition = binarySearch(arr, 0, arr.length - 1, target);

  // Incase element not found then return -1, -1.
  if (firstPosition === -1) {
    return [-1, -1];
  }

  // Initially set first position as start and end index.
  let startPosition = firstPosition;
  let endPosition = firstPosition;

  let previousValidPosition;
  while (startPosition !== -1) {
    previousValidPosition = startPosition; // store start position in temp previousValidPosition variable
    startPosition = binarySearch(arr, 0, startPosition - 1, target);
  }
  startPosition = previousValidPosition; // once startPosition -1 , while loop will end and then do this line.

  let lastValidPosition;
  while (endPosition !== -1) {
    lastValidPosition = endPosition; // store end position in temp lastValidPosition variable
    endPosition = binarySearch(arr, endPosition + 1, arr.length - 1, target);
  }
  endPosition = lastValidPosition; // // once endPosition -1 , while loop will end and then do this line.

  return [startPosition, endPosition];
};

console.log('findFirstAndLastIndex([5, 7, 7, 8, 8, 10], 8) :', findFirstAndLastIndex([5, 7, 7, 8, 8, 10], 8));

console.log('findFirstAndLastIndex([1, 2, 3, 4, 5, 6, 7, 7, 8], 7) :', findFirstAndLastIndex([1, 2, 3, 4, 5, 6, 7, 7, 8], 7));

console.log('findFirstAndLastIndex([5, 7, 7, 8, 8, 10], 9) :', findFirstAndLastIndex([5, 7, 7, 8, 8, 10], 9));

console.log('findFirstAndLastIndex([1, 2, 2, 2, 2, 2, 7, 8], 2) :', findFirstAndLastIndex([1, 2, 2, 2, 2, 2, 7, 8], 2));

console.log('findFirstAndLastIndex([1, 2, 3, 4, 5, 6, 7, 8], 8) :', findFirstAndLastIndex([1, 2, 3, 4, 5, 6, 7, 8], 8));

/**
 * Time Complexity
 * O(log(n))
 */
