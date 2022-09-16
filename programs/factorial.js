/* factorial, in mathematics, the product of all positive
 integers less than or equal to a given positive integer.
 It is denoted by that integer and an exclamation point .
 example = 5!
 5! = 5 * 4 * 3 * 2 * 1  = 120
   */


// Using while loop


function factorial(n) {
    let result = 1;
    while (n > 0) {
        result = result * n;
        n--;
    }
    return result;
}

console.log(factorial(5));

// 5! = 5 * 4 * 3 * 2 * 1  = 120

// Using For loop

function factorialUsingForLoop(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorialUsingForLoop(4));


// Using recursion

function factorialUsingRecursion(n) {
    let result = 1;
    function calculate(n) {
        if (n < 1) {
            return;
        }
        result = result * n;
        calculate(n - 1);

    }
    calculate(n);
    return result;
}

console.log(factorialUsingRecursion(4));



