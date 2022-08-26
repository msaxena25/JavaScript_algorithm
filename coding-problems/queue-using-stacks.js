// https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
 */

/**
 * Input ["MyQueue", "push", "push", "peek", "pop", "empty"]
    [[], [1], [2], [], [], []]
 * Output
    [null, null, null, 1, 1, false]

    Explanation
    MyQueue myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    myQueue.peek(); // return 1
    myQueue.pop(); // return 1, queue is [2]
    myQueue.empty(); // return false
 */

// Create a class named MyQueue
const MyQueue = function () {
  this.stackOne = []; // stack to store values
  this.stackTwo = []; // stack to read / fetch / pop values
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (value) {
  this.stackOne.push(value);
};

/**
 * Removes the element from in front of queue and returns that element.
 *
 * Logic
 * We have to return first element of stackOne. So we will pop every element from stackOne
 * and push into stackTwo. After popping all, stackOne first element will become stackTwo last
 * element. And finally we can use pop method on stackTwo.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackTwo.length === 0) {
    while (this.stackOne.length) {
      this.stackTwo.push(this.stackOne.pop());
    }
  }
  return this.stackTwo.pop();
};

/**
 * Get the front element. Front means first element
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stackTwo.length === 0) {
    while (this.stackOne.length) {
      this.stackTwo.push(this.stackOne.pop());
    }
  }
  return this.stackTwo[this.stackTwo.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stackOne.length === 0 && this.stackTwo.length === 0;
};

const que1 = new MyQueue();
que1.push(7);
que1.push(3);
que1.push(4);
que1.push(2);

console.log(que1);
console.log('que1.peek() :', que1.peek());
console.log('que1.pop() :', que1.pop());
console.log('que1.pop() :', que1.pop());

console.log('que1.empty() :', que1.empty());

console.log('que1.pop() :', que1.pop());
console.log('que1.pop() :', que1.pop());

console.log('que1.empty() :', que1.empty());

// Complexity

/**
 * push method
 * Time: O(1)
 * Space: O(1)
 */

/**
 * pop method
 * Time: O(n)
 * Space: O(1)
 */

/**
 * peek method
 * Time: O(n)
 * Space: O(1)
 */

/**
 * empty method
 * Time: O(1)
 * Space: O(1)
 */

/**
 * Overall
 * Time: O(n)
 * Space: O(n)
 */