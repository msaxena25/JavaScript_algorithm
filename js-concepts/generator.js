function run() {

    // Here yield will finish after one execution.
    function* idMaker() {
        let index = 0;
        yield index++;
    }

    const gen = idMaker();

    console.log(gen.next()); // {value: 0, done: false}
    console.log(gen.next()); // {value: undefined, done: true}

    // yield will finish only when while condition becomes false.
    function* idMaker1() {
        let index = 0;
        while (index < 2) {
            yield index++;
        }
    }

    const gen1 = idMaker1();

    console.log(gen1.next()); // {value: 0, done: false}
    console.log(gen1.next()); // {value: 1, done: false}
    console.log(gen1.next()); // {value: undefined, done: true}

    // yield will finish once for loop reaches to array length
    function* countAppleSales() {
        const saleList = [3, 7, 5];
        for (let i = 0; i < saleList.length; i++) {
            yield saleList[i];
        }
    }

    const appleStore = countAppleSales(); // Generator { }
    console.log(appleStore.next()); // { value: 3, done: false }
    console.log(appleStore.next()); // { value: 7, done: false }
    console.log(appleStore.next()); // { value: 5, done: false }
    console.log(appleStore.next()); // { value: undefined, done: true
}

//run();

function run1() {
    // Code statement which we write after yield , executes only when we call next method again. Because yield paused execution.
    // Means If we call next method of Generator single time, code after yield will not run.
    function* myGenerator(i) {
        while (true) {
            console.log('prev', i);
            yield i++;
            console.log('after', i);
        }
    }
    const gen3 = myGenerator(0);
    console.log(gen3.next()) // Here next method is only single time, only console.log('prev', i); will run.
}

//run1();

function run2() {
    // Code statement which we write after yield , executes only when we call next method again.
    // Means If we call next method of Generator single time, code after yield will no run.
    function* myGenerator(i) {
        while (true) {
            console.log('prev', i);
            yield i++;
            console.log('after', i);
        }
    }
    const gen3 = myGenerator(0);
    console.log(gen3.next()) // prev and after both console.log printed because, next method is called second time as well.
    /*    prev 0
          {value: 0, done: false}
          after 1 */

    console.log(gen3.next())
    /*     prev 1
    {value: 1, done: false} */
}

//run2();


// When dont pass any arguments to genertor function
function run3() {
    function* myGenerator(i) {
        yield i++;
    }
    const gen2 = myGenerator();
    console.log(gen2.next()) // {value: NaN, done: false} - because we did not pass any value of i.
    console.log(gen2.next()) // {value: undefined, done: true}
}
//run3();


/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
 *

 * The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method is called, the generator resumes execution, and runs until it reaches one of the following:
 * A yield, which causes the generator to once again pause and return the generator's new value. The next time next() is called, execution resumes with the statement immediately after the yield.
 * throw - throw is used to throw an exception from the generator.
 * return - A return statement is reached. In this case, execution of the generator ends.
 * The end of the generator function is reached when done is true.
 *
 * [rv] = yield [expression]
 * rv - Retrieves the optional value passed to the generator's next() method to resume its execution.
 * When code reaches to yield - it returns yield expresssion and execution paused, lines after yield does not run at that time.
 * When you call next method again, execution resumes and first read lines after yield and then return yield expression.
 *
 */
function run4() {
    function* myGenerator(value) {
        while (true) {
            var step = yield value++;
            console.log('step, value :', step, value);
        }
    }
    const gen = myGenerator(0);
    console.log(gen.next(10)) // {value: 0, done: false}
    console.log(gen.next(20)) // {value: 1, done: false}
    console.log(gen.next(30)) //{value: 2, done: false}
}
//run4();

function run6() {
    function* myGenerator(value) {
        let step;
        while (true) {
            step = yield value++;
            console.log('step & value :', step, value);
            if (step) {
                value += step;
            }
        }
    }
    const gen = myGenerator(0);
    console.log(gen.next(2)) // {value: 0, done: false}

    console.log(gen.next(4)) // step & value : 4 1  {value: 5, done: false}
    console.log(gen.next(6)) //step & value : 6 6  {value: 12, done: false}
    console.log(gen.next(10)) // step & value : 10 13  {value: 23, done: false}
}
//run6();

// Check when done property becomes true when we use multiple yield
function run7() {
    function* func1() {
        yield 34;
    }
    const iterator = func1();

    console.log(iterator.next());  // {value: 34, done: false}
    console.log(iterator.next());  // {value: undefined, done: true}

    // 2 yield
    function* func2() {
        yield yield 34;
    }
    const iterator1 = func2();

    console.log(iterator1.next());  // {value: 34, done: false}
    console.log(iterator1.next());  // {value: undefined, done: false}
    console.log(iterator1.next());  // {value: undefined, done: true}

    // 3 yield
    function* func3() {
        yield yield yield 34;
    }
    const iterator2 = func3();

    console.log(iterator2.next());  // {value: 34, done: false}
    console.log(iterator2.next());  // {value: undefined, done: false}
    console.log(iterator2.next());  // {value: undefined, done: false}
    console.log(iterator2.next());  // {value: undefined, done: true}
}

//run7();

// The yield* expression is used to delegate to another generator or iterable object.
function run8() {
    function* func1() {
        yield 42;
    }
    function* func2() {
        yield* func1();
    }
    const iterator = func2();
    console.log(iterator.next().value);
}
//run8()


// Combination of yield an yield*
function run9() {
    function* g1() {
        yield 2;
        yield 3;
        yield 4;
    }

    function* g2() {
        yield 1;
        yield* g1();
        yield 5;
    }
    const iterator = g2();

    console.log(iterator.next()); // {value: 1, done: false}
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: 4, done: false}
    console.log(iterator.next()); // {value: 5, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}
}
//run9();

