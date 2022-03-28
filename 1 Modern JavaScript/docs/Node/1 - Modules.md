
# Code organization with modules

Organizing JavaScript code has always been a problem since the early days of the language, in fact if you've worked with JS in the browser you've probably already seen how your script tags can get out of hand fast. Often requiring you use a whole entire package or script instead of just what you actually need.

Fortunately for us, Node has a standard called [CommonJS](https://en.wikipedia.org/wiki/CommonJS) that allows you to modularize your code in a style similar to most modern scripting languages.

## CommonJS modules

Modules are useful, because they let you encapsulate all sorts of functionality, and expose this functionality to other JavaScript files, as libraries. They let you create clearly separate and reusable snippets of functionality, each testable on its own.

The huge npm ecosystem is built upon this CommonJS format.

The syntax to import a module is:

```js
const package = require('module-name');
```

This system was born with server-side JavaScript in mind, and is not suitable for the client-side (this is why ES Modules and tools like Webpack and Rollup exist).

A JavaScript file is a module when it exports one or more of the symbols it defines, being them variables, functions, objects:

`say-hello.js`
```js
const sayHello = () => console.log('Hello World!');

module.exports = sayHello;
```

To use your newly created module you can `require` it with a relative path as the argument!

`script.js`
```js
const sayHello = require('./say-hello'); // Note the ./ this makes the import relative

sayHello()
```
---
You can also export multiple values from a module as an object:

`numbers.js`
```js
const a = 0;
const b = 5;
const c = 10;

module.exports = {
  a: a, b: b, c: c
}

// This can also be done as such
module.exports = {
  a, b, c // ES6 will make the key of the key value pair the variable name.
}
```

You can then get each export using object destructuring:

```js
const { a, b, c } = require('./numbers');

console.log(a, b, c);
```

Or you can keep them as a single object, this can sometime be cleaner when you have lots of methods:

```js
const numbers = require('./numbers');

console.log(numbers.a, numbers.b, numbers.c);
```