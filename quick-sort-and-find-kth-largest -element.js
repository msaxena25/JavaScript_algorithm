// https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 */

/**
 * Example 1:

    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5

    Example 2:
    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4
 */
const array = [5, 3, 1, 6, 4, 2];

const arrayTwo = [9, 4, 1, 5, 2, 3, 8, 7, 6, 0];

const quicksort = function (arr, left, right) {
  if (left < right) {
    const partitionIdx = getPartition(arr, left, right);
    quicksort(arr, left, partitionIdx - 1);
    quicksort(arr, partitionIdx + 1, right);
  }
  return arr;
};

const getPartition = function (arr, left, right) {
  const pivotElement = arr[right]; // last element of array
  let partitionIdx = left; // start with first element's index of array

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivotElement) {
      swap(arr, i, partitionIdx);
      partitionIdx++;
    }
  }
  swap(arr, partitionIdx, right);
  console.log('>  arr :', arr, ' partitionIdx is', partitionIdx);
  return partitionIdx;
};

const swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log('original array One:', array);
console.log('Sorted array: ', quicksort([...array], 0, array.length - 1)); // create copy by spread operator

console.log('original array second :', arrayTwo);
console.log('Sorted array: ', quicksort([...arrayTwo], 0, arrayTwo.length - 1));

/**
 * Complexity
 * Space: log(n)
 * Time: n log(n)
 *
 * Time complexity explanation -
 * For loop inside getPartition function will run for n times.
 * We are diving this problem into Two same sub problems so time complexity of this will be log(n).
 *
 */

const findKthLargest = function (arr, k) {
  const index = arr.length - k; // index of kth largest element
  quicksort(arr, 0, arr.length - 1); // sorted array
  return arr[index]; // value
};

console.log('Find 6th largest element of: [' + arrayTwo + '] = ', findKthLargest(arrayTwo, 6));
