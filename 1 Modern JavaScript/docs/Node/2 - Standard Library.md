
# The NodeJS standard library

Just like any modern scripting language NodeJS has a **standard library**. This is a collection of modules and tools to work with the machine directly. Such as opening a file, networking (HTTP, UDP), testing, cryptography and much much more. 

**You can read the full documentation [here](https://nodejs.org/api/index.html).**

This is one of the hardest things to constantly keep in your head, "what's in my toolbox?" is a difficult question to answer unless you've used these tools before. So we're going to go over a few of the most useful modules!

## The `fs` module

The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

To use this module:
```js
const fs = require('fs');
```
All file system operations have synchronous and asynchronous forms, this is important to remember! Most things in Node have synchronous and async versions, sometimes you even have to wrap async things with promises to avoid nasty callbacks! *(We'll go into more detail as to why callbacks are not ideal in more complex situations)*

Here is an example of opening a `.json` file and getting a valid JS object out!

`person.json`
```json
{
  "name": "John",
  "age": 25
}
```

`person-parser.js`
```js
// Import the file system module
const fs = require('fs');

// Read the file synchronously
const text = fs.readFileSync('./person.json');
// Parse the JSON into a valid object
const person = JSON.parse(text);

console.log(person.name); // John
console.log(person.age); // 25
```

## The `http` module

Since NodeJS is focused towards web development, it would only make sense that it comes with a bunch of battle tested code you can use for networking. The most common of which is the `http` module, this gives you the ability to create HTTP clients and servers in a dead simple fashion.

Here's a simple http server that will send JSON for any request it receives:

```js
// Import the http module
const http = require('http');

//
// Create a server, that contains a callback function.
// This kind of callback is not a bad design pattern,
// we'll be using this throughout later parts of the course.
// Express is actually just an abstraction over this module anyway!
//
const server = http.createServer((request, response) => {
  // Set our status code to 200, aka success.
  // Set our content type to JSON.
  response.writeHead(200, {'Content-Type': 'application/json'});

  // Define our object
  const payload = { hello: 'http' };
  // Convert it to a string
  const text = JSON.stringify(payload);

  // Send our text to the client
  response.write(text);

  // Finish sending the response to the client
  response.end();
});

// Start our server at localhost:3000!
server.listen(3000);
```

Run this script with `node` and then go to [here](http://localhost:3000) in your browser. You should see the JSON string!