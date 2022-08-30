const myPromise1 = new Promise((resolve, reject) => {
    // console.log("Initialise myPromise1");
    setTimeout(() => {
        //   reject('myPromise1 rejected');
    }, 3000);
})



const myPromise2 = new Promise((resolve, reject) => {
    // console.log("Initialise myPromise2");
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

/* ******************************************************************************************** */

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

/* ******************************************************************************************** */

// IF we reject a promise, catch is required else this will not be completed and reach in floating state.
// When we returns anything from promise, it becomes result of next then call.
// Result is undefined, if nothing is returned from the previous handler.

function promiseChainingWithCatch() {

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

}
// promiseChainingWithCatch();

/* ******************************************************************************************** */

//If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this. 
// Luckily we can wrap setTimeout in a promise.

function setTimeoutWithPromise() {
    setTimeout(() => saySomething("10 seconds passed"), 2000);

    // Wrapped settimout in Promise
    const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

    saySomething = (msg) => console.log(msg);

    // now use settimout like below, SO here we can catch errors by catch block.
    wait(5000)
        .then(() => saySomething("✔ 10 seconds with promise wrapper"))
        .catch(console.log);
}
// setTimeoutWithPromise()

/* ******************************************************************************************** */

// the unhandledrejection event, which is sent when a promise is rejected but there is no handler for the rejection.
window.addEventListener("unhandledrejection", (event) => {
    console.log(`Promise rejected -  unhandledrejection ; reason: ${event.reason}`);
});

// The rejectionhandled event is sent to the script's window scope whenever a JavaScript Promise is rejected but after the promise rejection has been handled.
window.addEventListener("rejectionhandled", (event) => {
    console.log(`Promise rejected; reason: ${event.reason}`);
});

/* ******************************************************************************************** */

//@ Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

function promiseAll() {
    Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.resolve('3')]).then(([result1, result2, result3]) => {
        /* use result1, result2 and result3 */
        console.log(result1, result2, result3);
    });

    //@ It is important to note that if one of the promises in the array rejects, Promise.all() will throw the error and abort the other operations.
    Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.reject('3')]).then(([result1, result2, result3]) => {
        /* use result1, result2 and result3 */
        console.log(result1, result2, result3);
    });
}
// promiseAll();

/* ******************************************************************************************** */

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

// allSettled();

/* ******************************************************************************************** */

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
// race();

/* ******************************************************************************************** */

// functions passed to then() will never be called synchronously, even with an already-resolved promise:
// Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later.
function timing() {
    console.log('💡 Promise timing');
    Promise.resolve().then(() => console.log(2));
    console.log(1); // 1, 2
}

// timing();

/* ******************************************************************************************** */

//Promise callbacks are handled as a Microtask whereas setTimeout() callbacks are handled as Task queues or Macro Tasks.
function taskQueueAndMicroTasks() {
    const promise = new Promise(function (resolve, reject) {
        console.log("Promise callback");
        resolve();
    }).then(function (result) {
        console.log("Promise callback (.then)");
    });

    setTimeout(function () {
        console.log("event-loop cycle: Promise (fulfilled)", promise);
    }, 0);

    console.log("Promise (pending)", promise);
}

// taskQueueAndMicroTasks();

/* OUTPUT

Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>} */

/* ******************************************************************************************** */

/* The microtask is a short function which will run after the current task has completed its work and when
there is no other code waiting to be run before control of the execution context is returned to the browser's event loop.

A function which we pass in queueMicrotask to be executed when the browser engine determines it is safe to call your code.
Enqueued microtasks are executed after all pending tasks have completed.
*/

/** settimeout vs queueMicrotask
 *
 * Basically the tasks of queueMicrotask are executed just after current callstack is empty before passing the execution to the event loop.
In the case of setTimeout, each task is executed from the event queue, after control is given to the event loop.
 */
function queueMicroTasks() {
    setTimeout(() => console.log('run 9'));
    Promise.resolve('Hi i am resolved 4').then(console.log);
    console.log('run 1');
    queueMicrotask(() => console.log('run 5'))
    Promise.resolve('Hi i am resolved 6').then(console.log);
    console.log('run 2');
    queueMicrotask(() => console.log('run 7'));
    Promise.resolve('Hi i am resolved 8').then(console.log);
    console.log('run 3');
}
// queueMicroTasks();

/* run 1
run 2
run 3
Hi i am resolved 4
run 5
run 6
run 7
Hi i am resolved 8
run 9

*/

/* ******************************************************************************************** */

// Web Lock api - not cleared
function concurrency() {
    async function run(value) {
        console.log('run')
        await navigator.locks.request('abcd', async (lock) => {
            console.log(lock)
            setTimeout(() => {
                console.log(value + ' -  start')
            }, 1000);
        });
        console.log('áfadq  ')


    }
    run('1');
    run('2');
    run('3');
    run('4');
    run('5');
    console.log('two')

}

// concurrency()


/* ******************************************************************************************** */

function checkAsync() {
    async function foo() {
        // const done = await 1; // this is valid statement.
        // done.then(() => console.log); // Promise rejected -  unhandledrejection ; reason: TypeError: done.then is not a function

        const two = Promise.resolve(1).then((res) => res);
        // two.then(res => console.log)
        console.log('two done', two)
    }

    // foo();

    async function foo1() {
        const result1 = await new Promise((resolve) =>
            setTimeout(() => resolve("1"), 800)
        );
        console.log(result1)
        const result2 = await new Promise((resolve) =>
            setTimeout(() => resolve("2"), 0)
        );
        console.log(result2)
    }
    //   foo1();

    async function foo2() {
        const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
        const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
        const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
        console.log('results :', results);
        console.log('end')
    }
    foo2().catch(console.log);
}

//checkAsync();

function arrays() {
    const arr = [1, 3, 3, 9, 12];

    /*  will run only 2 times because it find first element 3 at second iteration.
     Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found. */
    const out = arr.find((item) => {
        //console.log(item);
        return item === 3
    })
    console.log(out); // > 3

    // Returns true if at least one element in the calling array satisfies the provided testing function.
    const out1 = arr.some((item) => {
        //console.log(item);
        return item === 3
    })
    console.log(out1); // > true

    // Returns true if every element in the calling array satisfies the testing function.
    const out2 = arr.every((item) => {
        //console.log(item);
        return item === 3
    })
    console.log(out2); // > true

    // Returns the index of the first element in the array.
    console.log(arr.findIndex((item) => item > 3))

    // Returns the index of the last element in the array.
    console.log(arr.findLastIndex((item) => item > 3))

    //Returns the value of the last element in the array that satisfies test.
    console.log(arr.findLast((item) => item > 3))

    const arr1 = [4, 6];
    console.log(arr1.at(0), arr1.at(-0), arr1.at(4), arr1.at(-1), arr1.at(-2), arr1.at(-3)); // > 4 4 undefined 6 4 undefined

    // Returns a new array that is the calling array joined with other array(s) and/or value(s).
    const arr2 = arr1.concat(5, { 2: 2 }, false, [3]);
    console.log(arr2)
    // arr1.pop();
    console.log(arr2) // no impact on arr2 if we do perform any operation on arr1

    // Returns a new array iterator that contains the keys for each index in the calling array.
    console.log(arr1.keys()) // > Array Iterator {}

    for (const key of arr1.keys()) {
        console.log(key);
    }

    // There are three ways to create array

    /*  1. using array literal notation. ['Apple', 'Banana'];
        2. using the Array() constructor.  new Array('Apple', 'Banana');
        3. using String.prototype.split(). 'Apple, Banana'.split(', ');
    */

    const arr3 = [undefined, undefined];  // This is not an empty array so map function is working here.
    console.log(arr3.map(e => 1)) // [1, 1]

    const arr4 = new Array(2); // It creates an array with intial length and with empty elements.
    console.log(arr4.map(e => 1)) //  [empty × 2]
    console.log(arr4[1]); // undefined - when we check a value at index, it returns undefined instead of empty.


    // Function map() would firstly check HasProperty then call the callback & If hasProperty exists then only run callback.
    // In case when we define new Array(n), it creates an array with empty values thats why map does not work here.

    console.log(arr3.hasOwnProperty(0), arr4.hasOwnProperty(0)) // > true false
    console.log(arr3.hasOwnProperty(1), arr4.hasOwnProperty(1)) // > false false
    console.log(arr3.hasOwnProperty(5), arr4.hasOwnProperty(5)) // > false false

    const arr5 = new Array('apple', 'banana'); // Created array with speficified values so map will work here.
    console.log(arr5.map(item => 10)) // [10, 10]
    console.log(arr5.hasOwnProperty(0), arr5.hasOwnProperty(1)) // > true true
}
arrays()