console.log('https://leetcode.com/problems/4sum/')

function findFourSum(numbers, target) {
    numbers.sort((num1, num2) => num1 - num2);
    console.log('sorted numbers :', numbers);
    let map = {};
    const out = [];

    // We have taken four variables i, j, k & l
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) continue;

        for (let j = i + 1; j < numbers.length; j++) {
            let k = j + 1; // First pointer
            let l = numbers.length - 1; // Second pointer
            while (k < l) {
                let sum = numbers[i] + numbers[j] + numbers[k] + numbers[l];
                const str = `[${numbers[i]},${numbers[j]},${numbers[k]},${numbers[l]}]`; // create a string to store in object key
                console.log('str :', str, sum);
                if (sum === target) { // If target found then move our both pointer j, k by one.
                    if (!map[str]) {
                        map[str] = true;
                        out.push([numbers[i], numbers[j], numbers[k], numbers[l]])
                    }
                    k++;
                    l--;
                } else if (sum < target) {
                    // when we are down from target, then step up by 1 because our array is sorted (k is less so increase k by 1))
                    k++
                } else if (sum > target) {
                    //when we are up from target, then step down by 1 because our array is sorted (l is higher value so decrease l by 1)
                    l--
                }
            }

        }
    }
    console.log(map)
    console.log(out)


}

//findFourSum([1, 0, -1, 0, -2, 2], 0) // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
findFourSum([1, -2, -5, -4, -3, 3, 3, 5], -11) // [[-5,-4,-3,1]]
