// Print Fibonacci Series By Using ES6 Function Generator


function fibSeries(n) {
    function* fib() {
        var a = 0;
        var b = 1;
        var c = a;
        while (c < Number.POSITIVE_INFINITY) {
            yield c;
            a = b;
            b = c;
            c = a + b;
        }

    }
    const gen = fib();
    const series = [];
    for (let i = 0; i <= n; i++) {
        series.push(gen.next().value)
    }
    console.log(series)
}

fibSeries(10)


// By Using For loop

function printFib(n) {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 2] + series[i - 1])
    }
    console.log(series)

}

printFib(6)

// By Using while loop

function printFibWithWhile(n) {
    const series = [0, 1];
    let i = 2;
    while (i < n) {
        series.push(series[i - 2] + series[i - 1])
      // series.push(series[series.length - 1] + series[series.length - 2])
        i++;
    }
    console.log(series)

}

printFibWithWhile(10)


// using recursion


function printFibWithRecursion(n) {
    const series = [0, 1];
    function fib(n) {
        if (n === 2) {
            return;
        }
        series.push(series[series.length - 1] + series[series.length - 2])
        fib(n - 1)
    }
    fib(n);
    console.log(series)
    return series;
}

printFibWithRecursion(10);
