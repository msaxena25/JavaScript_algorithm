console.log('*****Without worker, Running a Long process in Main thread*****');

const runLoop = () => {
    console.log('For loop is running in main thread');
    console.log('OOps - Page blocked because of For loop');
    for (var i = 0; i <= 1999999999; i += 1) {
        var j = i;
    }
    console.log('output of for loop -  ', j);
}

const printTableOfTwo = () => {
    console.log('now printing table of 2 ->')
    for (let i = 1; i <= 10; i++) {
        console.log(`2 * ${i} = ${2*i}` );
    }
}

runLoop();
console.log('Page resumed after for loop finished');
printTableOfTwo()
