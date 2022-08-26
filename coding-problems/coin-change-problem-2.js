/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    const dp = [];
    dp[0] = [];
    dp[0].fill(0, 0, 5);
    console.log('dp :', dp);
   // return findNum(amount, coins)
};

let ways = 0;
function findNum(amount, coins) {
    if(amount === 0) {
        return 0;
    }
    
    for (let i = 0; i < coins.length; i++) {
        const remainingAmount = amount - coins[i];
        if(remainingAmount > 0) {
            findNum(remainingAmount, coins)
        }
        if(remainingAmount === 0 ){
            ways += 1;
        }
    }
    return ways;
}

change(5, [1,2,5])