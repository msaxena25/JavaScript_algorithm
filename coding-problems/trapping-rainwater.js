// https://leetcode.com/problems/trapping-rain-water/

/**
 * Input > [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]
 * Output > 6
 */

const trappingRainWaterAreaFirstWay = (arr) => {
  let totalWater = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = i,
      right = i,
      maxLeft = 0,
      maxRight = 0;
    while (left >= 0) {
      maxLeft = Math.max(arr[left], maxLeft);
      left--;
    }
    while (right < arr.length) {
      maxRight = Math.max(arr[right], maxRight);
      right++;
    }
    const minHeight = Math.min(maxLeft, maxRight);
    const currentWater = minHeight - arr[i];
    if (currentWater > 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

console.log(
  'trappingRainWaterAreaFirstWay([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]) :',
  trappingRainWaterAreaFirstWay([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
);

console.log(
  'trappingRainWaterAreaFirstWay([0,1,0,2,1,0,1,3,2,1,2,1]) :',
  trappingRainWaterAreaFirstWay([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);

console.log('trappingRainWaterAreaFirstWay([4,2,0,3,2,5]) :', trappingRainWaterAreaFirstWay([4, 2, 0, 3, 2, 5]));

/**
 * Runtime: 168 ms,
 * Memory Usage: 40.4 MB
 */
/**
 * Time : O(n^2)
 * Space: O(1)
 */

const trappingRainWaterAreaSecondWay = (arr) => {
  let totalWater = 0;
  let left = 0,
    right = arr.length - 1,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (arr[left] <= arr[right]) {
      maxLeft = Math.max(maxLeft, arr[left]);
      // when current height is less then max Left, means there is some space above current height where water can store.
      if (arr[left] < maxLeft) {
        totalWater += maxLeft - arr[left];
      }
      left++;
    } else {
      maxRight = Math.max(maxRight, arr[right]);
      if (arr[right] < maxRight) {
        totalWater += maxRight - arr[right];
      }
      right--;
    }
  }

  return totalWater;
};

console.log(
  'trappingRainWaterAreaSecondWay([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]) :',
  trappingRainWaterAreaSecondWay([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])
);

console.log(
  'trappingRainWaterAreaSecondWay([0,1,0,2,1,0,1,3,2,1,2,1]) :',
  trappingRainWaterAreaSecondWay([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);

console.log('trappingRainWaterAreaSecondWay([4,2,0,3,2,5]) :', trappingRainWaterAreaSecondWay([4, 2, 0, 3, 2, 5]));

/**
 * Runtime: 72 ms
 * Memory Usage: 40.2 MB
 */

/**
 * Time: O(n)
 * Space: O(1)
 */
