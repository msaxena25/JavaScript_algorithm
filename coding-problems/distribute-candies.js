console.log('https://leetcode.com/problems/distribute-candies/submissions/');

/**
 Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.


Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */

// By Using JS Set - Set contains only unique values by default
var distributeCandiesBySet = function (candyType) {
    let maxEatCandies = candyType.length / 2; //> n / 2
    const set = new Set(candyType);

    if (set.size < maxEatCandies) {
        maxEatCandies = set.size;
    }
    console.log(maxEatCandies);
    return maxEatCandies;
};

// By using simple forEach loop
var distributeCandies = function (candyType) {
    let maxEatCandies = candyType.length / 2; //> n / 2
    let out = [];
    candyType.forEach(type => {
        if (!out.includes(type)) {
            out.push(type);
        }
    });
    if (out.length < maxEatCandies) {
        maxEatCandies = out.length;
    }
    console.log(maxEatCandies);
    return maxEatCandies;
};

// By using array filter method
var distributeCandies = function (candyType) {
    let maxEatCandies = candyType.length / 2; //> n / 2
    candyType = candyType.filter((value, index, self) => {
        return self.indexOf(value) === index
    })
    if (candyType.length < maxEatCandies) {
        maxEatCandies = candyType.length;
    }
    // console.log(candyType)
    console.log(maxEatCandies);
    return maxEatCandies;
};

var distributeCandiesTwoPointer = function (candyType) {
    let maxEatCandies = candyType.length / 2; //> n / 2
    let i = 0;
    let j = candyType.length - 1;
    let out = [];
    while (i < j) {
        if (!out.includes(candyType[i])) {
            out.push(candyType[i]);
        }
        if (!out.includes(candyType[j])) {
            out.push(candyType[j]);
        }
        i++
        j--;
    }
    if (out.length < maxEatCandies) {
        maxEatCandies = out.length;
    }
    console.log(maxEatCandies);
    return maxEatCandies;
};



distributeCandiesTwoPointer([1, 1, 2, 2, 3, 3]) //3
distributeCandiesTwoPointer([1, 1]) //1
distributeCandiesTwoPointer([6, 6, 6, 6]) // 1
distributeCandiesTwoPointer([1, 2, 3, 4]) // 2