console.log('https://leetcode.com/problems/longest-increasing-subsequence/');

/**
 * @param {number[]} nums
 * @return {number}
 */

// not working this solution --
var lengthOfLISNotWorking = function (nums) {
    var out = [];
    for (let i = 0; i < nums.length; i++) {

        if (!out.length) {
            out.push(nums[i]);
            continue;
        }
        if (!out.includes(nums[i])) { // check element already exits
            const a = out[out.length - 1]; // pick last item
            if (nums[i] <= a) { // current element if <= last out item
                out.pop();
            }
            out.push(nums[i]);
        }

    }
    console.log(out)
    return out.length;

};
// working
var lengthOfLIS = function (nums) {
    var out = [];
    for (let i = 0; i < nums.length; i++) {
        console.log('outer')
        out[i] = 1;

        // while loop from i to 0
        let j = i;
        while (j >= 0) {
            if (nums[i] > nums[j]) {
                out[i] = Math.max(out[i], out[j] + 1);
            }
            j--;
        }

        /*  // while loop from start to i
         let j = 0;
         while (j < i) {
             if (nums[i] > nums[j]) {
                 out[i] = Math.max(out[i], out[j] + 1);
             }
             j++;
         }

         // Can also use for loop

         for (let j = 0; j < i; j++) {
             if (nums[i] > nums[j]) {
                 out[i] = Math.max(out[i], out[j] + 1);
             }
         } */


    }
    console.log(out)
    console.log(out[out.length - 1])
    return out[out.length - 1];

};

//lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) // [2, 3, 7, 18]

//lengthOfLIS([7, 7, 7, 7, 7, 7, 7]) // [7]

lengthOfLIS([0, 1, 0, 3, 2, 3]) // [0, 1, 2, 3]

//lengthOfLIS([4, 10, 4, 3, 8, 9]) // [3, 8, 9]