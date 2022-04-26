
# Lab 4: Library API

**Create a simple HTTP server that will statically serve text format books you download from [Project Gutenburg](https://www.gutenberg.org/).**

1. Download 3 .txt format books from [Project Gutenburg](https://www.gutenberg.org/)
    * Any books will do, make sure to download them as text.
2. Create a folder called `books` in your lab folder and move them there.
3. Use `createServer` from the `http` module to make a simple HTTP server.
4. Use `readdirSync` from the `fs` module on your `books` folder to get back of all the files available.
5. See if the `request.url` is equal the filename of the book.
6. Use `readFileSync` from the `fs` module to to load the text into a variable.
7. Send the book whole book back to the client.

**Starter Template:**
```js
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  // Set the mime-type to plain/text, don't worry about mime types
  // this just tells the client what data is being sent
  const headers = {'Content-Type': 'text/plain'};

  const bookFound = // compare request.url and your list of books to see if it exists
  
  if(bookFound) {
    // Return back a 200 and the book
    response.writeHead(200, headers);
    const text = // Read the book text
    response.write(text);
  } else {
    // Return back a 404 and a message
    response.writeHead(404, headers);
    response.write(`Book ${request.url} not found!`);
  }

  // End our response
  response.end();
});

// Listen on port 3000
server.listen(3000);
```

## Extra Credit:

Use the example code above, but create a static file server to serve a simple HTML/CSS website.

**Helpers**

* This library will figure out mime-types for you automatically: [mime-types](https://www.npmjs.com/package/mime-types)
