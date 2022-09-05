console.log('https://leetcode.com/problems/climbing-stairs/')

/**
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps


Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

// This is Dynamic programming problem
// Used technique of Memoization & Recursion.

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var dp = [];
    return countStep(n, dp);
};

function countStep(n, dp) {
    if (n === 1) { // counting one step
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (dp[n]) {
        return dp[n]
    }
    return dp[n] = countStep(n - 1, dp) + countStep(n - 2, dp);
}