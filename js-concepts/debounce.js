const btn = document.getElementById('myBtn');

function handler(event) {
    console.log('✔ I am clicked', event)
}

// Binding direct handler in button click event
// It will call in every click
 //btn.addEventListener('click', handler);

btn.addEventListener('click', debounce(handler, 1500));
//btn.addEventListener('click', debounce((e) =>  handler('custom argument passed'), 1500));

// Instead of returning function from debounce function, we can also directly bind that inner function in event listener
//btn.addEventListener('click', caller);

/**
 * Debounce function that returns a function
 * @param {*} func - this is a handler function which have to run in click event
 * @param {*} delay - delay time
 * @returns function
 */
function debounce(func, delay) {
    console.log('debounce started')
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            console.log('😒 removed timeout id', timeoutId)
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay);
        console.log('😊 created timeout id ', timeoutId)
    }
}

// This function directly bind in event listener
let timeoutId;
function caller() {
    if (timeoutId) {
        console.log('😒 removed timeout id', timeoutId)
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
        handler()
    }, 1000);
    console.log('😊 created timeout id ', timeoutId)
}

/** Example -
 * In debounce - only last event executed, rest all events are ignored.  Debounce, execute a function only if X milliseconds have passed without it being called.
 *
 * Search input box - when User stop to typing in search field then only call api to get data.
 * If User frequently clicking on a button then Call API only at last click event.
 * Execute required function or call when User stop to move Cursor.
 */