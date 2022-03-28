
# ES6 Overview

The following are key feature differences of ES6
(ECMAScript6) from ES5 you'll need to know for Node and React.

<!-- [Here is a good doc on the fundamentals of JavaScript and ES6 you'll need to know for React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) -->

## Block-scoped variable declarations
##### No more `var`
- In ES6, you should never use *var*. Instead opt for `let` and `const` for variable declaration, which are strictly block-scoped.
- As a rule of thumb, declare all variables using `const` unless their values will ever be changed.
- Variables declared with `let` and `const` can never be redeclared. You'll get the following error: `Uncaught SyntaxError: Identifier '<var_name>' has already been declared`

##### const
- ES6 now allows for immutable variables: variables declared as `const` can only be assigned a value *once*. 
- Attempting to change the value of a `const` variable will result in an error: `Uncaught TypeError: Assignment to constant variable.`
- Note: If the value assigned to a `const` variable is an array or object, the array or object can still be modified. It is only the *variable name* that is bound permanently. The value itself is still mutable.
```js
const zero = 0;
// zero++; // Not allowed!
// const zero = 1; // Not allowed!
const arr = [1,2,3,4];
arr[0] = 'a'; // Allowed
console.log(arr); // prints ['a',2,3,4]
// arr = [5,6,7,8]; // Not allowed!
const obj = {name:'Keanu', age:99};
obj.name = 'Templeton'; // Allowed
// obj = {name:'Chuck Spadina', age:7000}; // Not allowed
```

##### let
- Use `let` for mutable variables.
```js
let name = 'Keanu Reeves';
// let name = 'Chuck Spadina'; // Not allowed!
name = 'Templeton Page Taylor'; // Allowed
let arr = [1,2,3,4];
arr[0] = 'a'; // Allowed
arr = [5,6,7,8]; // Allowed
const obj = {name:'Keanu', age:99};
obj = {name:'Chuck Spadina', age:7000}; // Allowed
```
    
## Arrow functions
An arrow function (also known as *fat arrow function*) expression has a shorter syntax than a function expression. Arrow functions are used to define *anonymous functions*. 

**Authors Note: Use them wherever you don't need access to `this`, they make callbacks and working with promises cleaner!**

There are notable differences between arrow functions and functions defined with the `function` keyword. Arrow functions don't have their own: 
- `this`
  - The binding for keyword `this` is the same outside and inside an arrow function
  - Functions declared with the keyword `function` have their own `this`
  - This makes arrow functions very convenient for creating class methods: you don't have to manually bind `this` to your methods. However, you need to use a plugin with your build to take advantage of this feature. Read about how to use the [property initializer plugin here](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Property%20Initializer.md) 

- `arguments`
  - You can create one using the [spread operator](#spread-operator): `(...args) => doSomething(args[0], args[1])`

- `new.target`
  - The `new.target` property lets you detect whether a function or constructor was called using the new operator. **Arrow functions can't be called with a new operator**. Because of this, you can't use arrow functions as constructors. 

- `super`
  - You can't call `super()` within an arrow function.

Arrow functions are best suited for non-method functions (**unless you use the [property initializer plugin](https://github.com/DED8IRD/NodeReactFullStack/blob/master/2%20React/docs/Property%20Initializer.md)**). They are excellent for use in functional programming (e.g. parameters in `map`, `filter`, `reduce`).
Arrow functions cannot be used as constructors.

Syntax:
```js
// for single-line expressions
(param1, param2, ...paramN) => expression;
// a single parameter doesn't need parentheses
param => expression;
// for multiple lines, wrap the return expression with curly braces
(param1, param2, ...paramN) => {
    return expression;
}
```
Examples:
```js
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };
const moreConciseMultiplyES6 = (x, y) => x * y;    // equivalent to above
```

## Default parameter values
ES6 allows for default parameter values like in Python and Ruby.
```js
function multiply(a, b=1) {
  return a * b;
}

console.log(multiply(5, 2));    // prints 10
console.log(multiply(5));       // prints 5
```

## Template literals
ES6 allows for string interpolation through something called *template literals*. To use them, instead of using double or single quotes, we enclose the string using back-tics (\`) and embed expressions using \`${expression}\`.

Example:
```js
\\ ES5
var person = {name:'John Doe', age:35};
var greeting = "Hello, my name is " +person.name+ ".\n" +
               "I am " +person.age+ " years old."; 

\\ ES6
let person = {name:'John Doe', age:35};
let greeting = `Hello, my name is ${person.name}
I am ${person.age} years old.`
```
Note that any newline characters inserted in the source are part of the template literal.


## Spread operator
The spread operator: `...` *expands* an iterable into its elements.

The spread operator essentially replaces the `Function.prototype.apply` function.

It's useful for:
##### Inserting arrays
If we want to inject the multiple items of an iterable within another iterable, we can use the spread operator:
```js
let mid = ['c', 'd', 'e'];
let arr = ['a', 'b', ...mid, 'f', 'g'];
console.log(arr); // returns ['a','b','c','d','e','f','g']
```

If we don't use the spread operator, we get a nested array where the entire `mid` array gets inserted into `arr`:
```js
let mid = ['c', 'd', 'e'];
let arr = ['a', 'b', mid, 'f', 'g'];
console.log(arr); // returns ['a','b',['c','d','e'],'f','g']
```

##### Copying arrays 
```js
let arr1 = [1,2,3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1); // [1,2,3]
console.log(arr2); // [1,2,3,4]
```

A neat ES6 way to generate a range of numbers:
```js
let range = [...Array(100).keys()]; // array of first 100 numbers
```

##### Passing iterable as arguments
For functions:
```js
let arr = [1, 100, -5];
Math.max(arr); // Error: NaN
Math.max(...arr); // 100

const plusMinus = (a, b, c) => a + b - c;
plusMinus(...arr); // 106
```
For constructors:
```js
let date = new Date(...[2018, 06, 19]); // Thu Jul 19 2018 00:00:00 GMT-0700 (Pacific Daylight Time)
```

## Rest parameters
The rest parameter syntax is used for destructuring arrays and objects. Rest parameters allow us to represent an indefinite number of arguments as an array.

Rest syntax uses the same syntax as the spread operator, `...`, but they in fact have opposite functionalities. Rest *condenses* multiple elements into a single element, while spread *expands* an iterable into its elements. 

##### Examples 
```js 
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => previous + current);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
```

## Iterating over items directly: for...of operator
The `for...of` operator allows you to iterate over the items in an iterable or generator directly.  This is similar to Python's `for...in` operator. 

##### Examples
```js
let fruits = ['apples', 'oranges', 'bananas']
for  (let fruit of fruits) {
  console.log(fruit)
}
```
Output:
```
apples
oranges
bananas
```

To grab both the item and its index (akin to Python's `enumerate` function), loop over `Array.prototype.entries()`
```js
for (const [i, fruit] of fruits.entries()) {
    console.log(i, fruit)
}
```
Output:
```
0 "apples"
1 "oranges"
2 "bananas"
```

## Object merging
`Object.assign()` is a function that merges objects. This is similar to Python's `dict.update()` method.

##### Examples 
```js 
let contact = {
  name: 'Jackie Chan',
  age: 64,
  job: 'kung fu master'
}

let jobs = {
  job: 'kung fu master, actor, stuntman, singer, philanthropist, dad'
}

Object.assign(contact, jobs)
console.log(contact)
```


## Classes
### Class definition

Classes are greatly simplified in ES6 compared to classes in ES5. The *class* keyword is now used to define classes. Class members (getters, methods, and static methods) are defined within the class body (between the curly braces).

```js
// class declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// unnamed class expression
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);    // output: "Rectangle"

// named class expression
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);    // output: "Rectangle2"
```
#### Constructor
ES6 classes have a dedicated `constructor` that runs on object creation. This simplifies class object initialization.

### Class instance

To create a class instance, use the `new` keyword and call the constructor :
```js
let square = new Rectangle(4,4);
```

#### Hoisting
Note that class declarations and class expressions are *not hoisted*, unlike function declarations. You need to declare your class and then access it, otherwise, code like the following will throw a *ReferenceError*.

```js
let p = new Rectangle();    // ReferenceError
class Rectangle {}
```

### Class inheritance
The *extends* keyword is used in class declarations or class expressions to create a class as a child of another class.

```js
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);    // call the super class constructor and pass in the name parameter
    this.species = 'dog';
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

let a = new Animal('Rufus');
a.speak();  // Rufus makes a noise.
let d = new Dog('Fido');
d.speak();  // Fido barks.
```
If there is a constructor present in subclass, it needs to first call `super()` before using `this`.
The *super* keyword can be used to call parent class methods to extend child methods.

```js
class Cat extends Animal {
  constructor(name) {
    super(name);    // call the super class constructor and pass in the name parameter
  }

  speak() {
    super.speak();
    console.log(this.name + ' meows.');
  }
}

let c = new Cat('Pickles');
c.speak();  
// Pickles makes a noise.
// Pickles meows.
```

Note that ES6 classes are actually just syntactic sugar on ES5 prototypes. ES6 classes still use prototypic inheritance under the hood.

Read more about classes [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

