const binarySearchOneWay = function (arr, target) {
  return search(arr, 0, arr.length - 1, target);
};

function search(arr, left, right, target) {
  if (arr.length < 1) {
    return -1;
  }
  const midIndex = Math.floor((left + right) / 2);
  const mid = arr[midIndex];

  if (target === mid) {
    return mid;
  } else if (target > mid) {
    return search(arr, midIndex + 1, right, target);
  } else {
    return search(arr, left, midIndex - 1, target);
  }
}

console.log('binarySearchOneWay([1,2,3,4,5,6,7], 6) :', binarySearchOneWay([1, 2, 3, 4, 5, 6, 7], 6));

// ********* Second way using While loop ********************** //

const binarySearchSecondWay = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const mid = arr[midIndex];
    if (target === mid) {
      return mid;
    } else if (target > mid) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
};

console.log('binarySearchSecondWay([1,2,3,4,5,6,7], 4) :', binarySearchSecondWay([1, 2, 3, 4, 5, 6, 7], 4));
console.log('binarySearchSecondWay([1,2,3,4,5,6,7], 9) :', binarySearchSecondWay([1, 2, 3, 4, 5, 6, 7], 9));

/**
 * Time Complexity
 * O(log(n))
 * Number of element (n) = 7
 * Operation = 3
 * log2 (7) = 3 means 2^3
 */
