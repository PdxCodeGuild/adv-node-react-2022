
# Lab 2: Hello Node

Welcome to NodeJS! Your first task is to have the computer give you some output in the terminal, in the form of a basic greeting. 

**Easy enough right?** However each part of this lab will push your understanding of programming, rote memory and patterns that can help you solve problems.

*Always remember you have the [docs](../docs) from each section of the course, as well as an infinitely large set of places to find tutorials and documentation! No programmer remembers every minute thing for each syntax and each solution to a problem. This takes practice, never feel ashamed to ask questions in class or especially online. Google is your friend!*

**The ability to learn on your own will be your #1 skill as programmer.**

---
## Part 1: Functions

In a file called `hello-world.js` write a program that contains 2 fat-arrow functions, one called `speak` and another called `capitalize`.

* The `capitalize` function should take in a string and should return back the string but with the first letter capitalized.
* The `speak` function should take in a name and output this message to the terminal: **"Hello there $NAME!"** *(Replace $NAME with the result from `capitialize`)*
* Run your script using `node`.

**I will be using "placeholders" like $THIS for the rest of the course, if you see these replace them with valid variable names or strings!**

---

## Part 2: Writing simple tests

* Export your `capitalize` and `speak` functions from the `hello-world.js` module.
* Create another file called `hello-world.test.js` and import them using object destructuring.
* Write some test cases to see if your capitalize function works
  * eg. `capitalize('mike')` should return `'Mike'`
* Run your `.test.js` file using `node`.

Use the `assert` Node module to test your `capitalize` function. 

For example, testing if two strings are equal with `assert` is as such:
```js
const assert = require('assert');

const string = "llama";

// Use strictEqual to compare to strings
assert.strictEqual(string, "llama"); // This will pass silently
assert.strictEqual(string, "lLaMa"); // This will throw an assertion error!
```

**Normally in a TDD (Test Driven Development) environment, tests are written before you actually write your code!**

*However this takes practice and requires a lot of previous experience to use efficiently. Thinking about tests and reproducibility early on is a great way to start honing these skills, but following the TDD pattern is difficult especially for people who are new. Remember to keep testing in mind though!*

---

## Part 3: Using the functional concepts

* Allow the capitalize function to work on multiple words.
  * Remember you can split strings into arrays!
  * Also remember you can join arrays into strings!

* Try and use the `map` method on `Array` to solve the problem.

As mentioned earlier `Array.map` will iterate over an Array and return a new Array with updated values. *(Try and remember each time the function gets called it pushes (appends) the return value into the new list!)*

**This is identical to the [list comprehension](https://hackernoon.com/list-comprehension-in-python-8895a785550b) in Python, however you can define full functions anonymously as the loop return! Unlike Python's single expression limit!**


```js
// Create an array of numbers
const array = [1, 2, 3, 4];

//
// Create a fat arrow function called double
// This takes a value and multiplies it by 2.
//

// This differs from python because the curly braces define any valid block of code, in this case a multi-statement/expression function.
const double = (value) => {
  return value * 2;
};

//
// doubleImplicitReturn is identical to the function above!
// Fat-arrow functions do not need a return for a single statement, 
// this is called an implicit return and only happens when the right
// hand side of a fat arrow function has no curly-braces!
//
// This sometimes can make your code more expressive and cleaner.
// (Not always!)
//
const doubleImplicitReturn = (value) => value * 2;

// Create a new array that's been altered by our callback function double.
const doubledNumbers = array.map(double);

// Will return the same value.
const doubledNumbersImplicit = array.map(doubleImplicitReturn); 

// This can also be done anonymously!
const doubledNumbersAnonymous = array.map((value) => value * 2); 

// Verify map has created a new Array with each of our expected results.
console.log(doubledNumbers); // [2, 4, 6, 8]
console.log(doubledNumbersImplicit); // [2, 4, 6, 8]
console.log(doubledNumbersAnonymous); // [2, 4, 6, 8]

```


