/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1);
   // dp.fill(-1, 0, amount + 1);
    dp[0] = 0;
    return minCoins(coins, amount, dp);
};

function minCoins(coinsArr, amount, dp) {
    var requiredCoins = Number.MAX_SAFE_INTEGER;
    if (amount === 0) {
        return 0;
    }
    for (let i = 0; i < coinsArr.length; i++) {
        if (amount - coinsArr[i] >= 0) {
            let subAns = 0;
            if (dp[amount - coinsArr[i]]) {
                subAns = dp[amount - coinsArr[i]];
            } else {
                subAns = minCoins(coinsArr, amount - coinsArr[i], dp)
            }
            if (subAns >= 0) {
                requiredCoins = Math.min(requiredCoins, subAns + 1);
            }

        }
    }
    if (requiredCoins != Number.MAX_SAFE_INTEGER) {
        dp[amount] = requiredCoins;
    } else {
        dp[amount] = -1;
    }
    return dp[amount];
}

// function minCoins(coinsArr, amount) {
//     var requiredCoins = Number.MAX_VALUE;
//     if (amount === 0) {
//         return 0;
//     }
//     for (let i = 0; i < coinsArr.length; i++) {
//         var numberOfCoins = 0;
//         var remainingAmount = amount - coinsArr[i];
//         if (remainingAmount >= 0) {
//             numberOfCoins = minCoins(coinsArr, remainingAmount);
//         }
//         numberOfCoins = numberOfCoins + 1;
//         requiredCoins = Math.min(numberOfCoins, requiredCoins);
//     }
//     return requiredCoins;
// }



var a = [9, 3];
var amount = 18;  // output 2
console.log(' coinChange(a, amount); output - 2 :', coinChange(a, amount));

console.log(' coinChange([2,3], 7); output - 3 :', coinChange([2,3], 7));

console.log('coinChange([7,5,1], 18); output - 4 :', coinChange([7,5,1], 18));

console.log(' coinChange([2], 3); output - -1 :', coinChange([2], 3));

//console.log(' coinChange([186,419,83,408], 6249) :', coinChange([186,419,83,408], 6249));

