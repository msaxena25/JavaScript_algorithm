/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = [];
    dp[0] = 0;
    return minCoins(coins, amount, dp);
};

function minCoins(coinsArr, amount, dp) {
    var requiredCoins = Number.MAX_SAFE_INTEGER;
    if (amount === 0) {
        return 0;
    }
    for (let i = 0; i < coinsArr.length; i++) {
        let remainingAmount = amount - coinsArr[i];
        if (remainingAmount >= 0) {
            let subAns = 0;
            if (dp[remainingAmount]) {
                subAns = dp[remainingAmount];
            } else {
                subAns = minCoins(coinsArr, remainingAmount, dp)
            }
            if (subAns >= 0) {
                requiredCoins = Math.min(requiredCoins, subAns + 1);
            }
        }
    }
    if (requiredCoins != Number.MAX_SAFE_INTEGER ) {
        dp[amount] = requiredCoins;
    } else {
        dp[amount] = -1;
    }
    return dp[amount];
}

// This is Brute Force Solution without Memoization
function minCoinsX(coinsArr, amount) {
    var requiredCoins = Number.MAX_SAFE_INTEGER;
    if (amount === 0) {
        return 0;
    }
    for (let i = 0; i < coinsArr.length; i++) {
        var remainingAmount = amount - coinsArr[i];
        if (remainingAmount >= 0) {
            var subAns = minCoins(coinsArr, remainingAmount);
        }
        if(subAns >= 0) {
            requiredCoins = Math.min(subAns + 1, requiredCoins);
        }
    }
    if (requiredCoins != Number.MAX_SAFE_INTEGER ) {
        return requiredCoins;
    } else {
        return -1;
    }
}



var a = [2,3];
var amount = 6;
console.log(' coinChange(a, amount); output - 2 :', coinChange(a, amount));

console.log(' coinChange([2,3], 7); output - 3 :', coinChange([2,3], 7));

console.log('coinChange([7,5,1], 18); output - 4 :', coinChange([7,5,1], 18));

console.log(' coinChange([2], 3); output - -1 :', coinChange([2], 3));

console.log(' coinChange([3,8], 54); output - 8 :', coinChange([3,8], 54));

console.log(' coinChange([186,419,83,408], 6249); output - 20:', coinChange([186,419,83,408], 6249));

