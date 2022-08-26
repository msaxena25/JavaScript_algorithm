const myPromise1 = new Promise((resolve, reject) => {
    console.log("Initialise myPromise1");
    setTimeout(() => {
        reject('myPromise1 rejected');
    }, 3000);
})



const myPromise2 = new Promise((resolve, reject) => {
    console.log("Initialise myPromise2");
    setTimeout(() => {
        resolve('myPromise2 resovled');
    }, 1000);
})

// (err) => console.log(err) is same as console.log

async function printMe() {
    const output1 = await myPromise1.catch((err) => console.log(err))
    console.log(output1); // undefined
    const output2 = await myPromise2.catch(console.log)
    console.log(output2) // myPromise2 resovled
}

//printMe();

async function print2() {
    const output1 = await myPromise2;
    // If we don't handle reject scenario, rest lines of code will never run And becomes a floating state.
    const output2 = await myPromise1.catch(console.log); // output2 is undefined
    const output3 = await myPromise2;
    const output4 = await myPromise2;
    const output5 = await myPromise2;
    console.log(output1, output5);
}

// print2();

// IF we reject a promise, catch is required else this will not be completed and reach in floating state.
// When we returns anything from promise, it becomes result of next then call.
// Result is undefined, if nothing is returned from the previous handler.

new Promise((resolve, reject) => {
    console.log("Initial");
    resolve('first resolved');
    resolve('second resolved'); // will never run because Promise emit only single value
})
    .then((res) => {
        //throw new Error("Something failed", res);
        console.log(res);
        //  - not returning anything, If we return anything from here, it becomes response of next then.
        // return 'hello';
        // return Promise.resolve('mohit')
    })
    .then((res) => {
        console.log("Do this", res);
    }).then((res) => {
        console.log("Do this, no matter what happened before", res);
        //return Promise.reject('i m rejected')
    }).catch((err) => {
        // IF any promise fails, it will come to this catch block.
        console.log("Promise rejected with error - ", err);
    })


//If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this. 
// Luckily we can wrap setTimeout in a promise.
setTimeout(() => saySomething("10 seconds passed"), 2000);

// Wrapped settimout in Promise
const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

saySomething = (msg) => console.log(msg);

// now use settimout like below, SO here we can catch errors by catch block.
wait(5000)
    .then(() => saySomething("✔ 10 seconds with promise wrapper"))
    .catch(console.log);



// the unhandledrejection event, which is sent when a promise is rejected but there is no handler for the rejection.
window.addEventListener("unhandledrejection", (event) => {
    console.log(`Promise rejected -  unhandledrejection ; reason: ${event.reason}`);
});

// The rejectionhandled event is sent to the script's window scope whenever a JavaScript Promise is rejected but after the promise rejection has been handled.
window.addEventListener("rejectionhandled", (event) => {
    console.log(`Promise rejected; reason: ${event.reason}`);
});

//@ Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.resolve('3')]).then(([result1, result2, result3]) => {
    /* use result1, result2 and result3 */
    console.log(result1, result2, result3);
});

//@ It is important to note that if one of the promises in the array rejects, Promise.all() will throw the error and abort the other operations.
Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.reject('3')]).then(([result1, result2, result3]) => {
    /* use result1, result2 and result3 */
    console.log(result1, result2, result3);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

//@ The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
//@ It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
// In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.
function allSettled() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];

    Promise.allSettled(promises).
        then((results) => console.log(results));
}

allSettled();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
// The Promise that fullfill or reject first, that will come only in result, rest all will be ignored.
function race() {
    console.log('💡 Promise.race');

    Promise.race([Promise.resolve('Promise.race 1'), Promise.resolve('Promise.race 2')]).then((results) => console.log(results));

    const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Promise.race 2000'));
    const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2100, 'Promise.race 2001'));
    Promise.race([promise1, promise2]).then((results) => console.log(results));
}
race();

function timing() {
    console.log('💡 Promise timing');
    Promise.resolve().then(() => console.log(2));
    console.log(1); // 1, 2
}

timing();