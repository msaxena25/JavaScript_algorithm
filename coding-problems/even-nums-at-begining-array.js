console.log('https://leetcode.com/problems/sort-array-by-parity/')

/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    console.log('nums :', nums);
    var out = [];
    nums.forEach(num => {
        if (num % 2 === 0) {
            out.unshift(num);
        } else {
            out.push(num)
        }
    })
    console.log(out)
    return out;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityTwoPointer = function (nums) {
    var out = [];
    let i = 0;
    let j = nums.length - 1;
    if (nums.length === 1) {
        out.push(nums[0]);
        console.log('out :', out);
        return out;
    }
    while (i < j) {
        if (nums[i] % 2 === 0) {
            out.unshift(nums[i]);
        } else {
            out.push(nums[i])
        }
        if (nums[j] % 2 === 0) {
            out.unshift(nums[j]);
        } else {
            out.push(nums[j])
        }
        i++;
        j--;
        if (i === j) {
            if (nums[i] % 2 === 0) {
                out.unshift(nums[i]);
            } else {
                out.push(nums[i])
            }
            break;
        }
    }
    console.log('out :', out);
    return out;
};

sortArrayByParityTwoPointer([0]);
sortArrayByParityTwoPointer([0, 2, 4]); // [0,2,4]
sortArrayByParityTwoPointer([3, 1, 2, 4]);
sortArrayByParityTwoPointer([3, 1, 6, 3, 4, 8, 0, 9, 12, -9, -4]); // [-4, 12, 0, 8, 4, 6, 3, 1, 3, 9, -9]