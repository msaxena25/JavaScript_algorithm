//https://leetcode.com/problems/3sum/

console.log('https://leetcode.com/problems/3sum/');

Input: nums = [-1, 0, 1, 2, -1, -4] // Input: is label in JS
Output: [[-1, -1, 2], [-1, 0, 1]];

Input: nums = [0, 1, 1]
Output: []

function findThreeSum(numbers) {
    // numbers.sort((num1, num2) => num1 < num2 ? -1 : 1);
    numbers.sort((num1, num2) => num1 - num2);
    console.log('sorted numbers :', numbers);
    let map = {};
    const out = [];

    // We have taken three variables i, j and k
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) continue;

        // We need target 0. If i > 0 means next all values are > 0 because array is sorted. So cannot acheive target 0 with all plus values.
        if (numbers[i] > 0) continue;

        let j = i + 1; // FirstPointer
        let k = numbers.length - 1; //SecondPointer

        while (j < k) {
            console.count('running')
            let sum = numbers[i] + numbers[j] + numbers[k];
            const str = `[${numbers[i]},${numbers[j]},${numbers[k]}]`; // create a string to store in object key
            console.log('str :', str, sum);
            if (sum === 0) { // If target found then move our both pointer j, k by one.
                if (!map[str]) {
                    map[str] = true;
                    out.push([numbers[i], numbers[j], numbers[k]])
                }
                j++;
                k--;
            } else if (sum < 0) {
                // when we are down from target, then step up by 1 because our array is sorted (j is less so increase j by 1))
                j++
            } else if (sum > 0) {
                //when we are up from target, then step down by 1 because our array is sorted (k is higher value so decrease k by 1)
                k--
            }
        }
    }
    console.log(map)
    console.log(out)


}

//findThreeSum([-1, 0, 1, 2, -1, -4]) // [[-1, -1, 2], [-1, 0, 1]]
//findThreeSum([0, 0, 0, 0]) // [0, 0, 0]
//findThreeSum([3, 0, -2, -1, 1, 2]) // [[-2,-1,3],[-2,0,2],[-1,0,1]]

findThreeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 0, 4])
// [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]


/**
 * solve this problem by using two pointers that will give us O(n^2) time complexity. In this approach, the first thing we need to do is to sort the given array in ascending order.

After sorting the array, we are going to iterate through it and set our two pointers. A left pointer will be set to a number that comes immediately after the current number and a right pointer will be set to the number at the end of the array. Then we are going to find our current sum which is the sum of our current number, a left number, and a right number.

Now we check if our current sum is equal to our target sum, which in this case is 0.

If it is equal, we just add those three numbers to our final array (triplets).

If the current sum is less than 0, we move the left pointer to the right by one to increase the sum. Because we earlier sorted the given array in ascending order, we know that each number is greater than the number to its left.

If the current sum is greater than 0, because we know that each number is smaller than the number to its right, we can move the right pointer to the left by one to decrease the sum.
 */