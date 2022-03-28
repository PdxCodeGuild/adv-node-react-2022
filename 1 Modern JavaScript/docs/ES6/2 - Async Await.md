
# async/await

ECMAScript2017 (ES8) introduced an easier way to work with promises. 

This means you can run promise based code in a synchronous manner and can greatly improve the readability of your code.

### Examples 

#### Use `fetch` to make an AJAX request
Recall that `fetch()` is an *asynchronous function* that always returns a `Promise`.

Handle promise the ES6 way:
```js 
function getRandomQuote() {
	// fetch() returns promise
	fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1') 
	// .then() resolves promise with response object and returns another promise
	.then(res => res.json()) 
	// console logs response JSON
	.then(jsonRes => console.log(jsonRes))	
	// catches any errors
	.catch(err => console.log(err));
}

getRandomQuote();
```

Using async/await:

1. Use the `async` keyword at a function declaration to specify that the function contains some asynchronous operation.

2. Add `await` keyword before any statement that returns a promise. Store the resolved values as variables.

3. Treat other operations as synchronous operations.

4. (Optional) Add a try/catch block to catch any errors.

```js 
async function getRandomQuote() { // Step 1
  try {
    const res = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'); // Step 2
    
    const jsonRes = await res.json(); // Step 2
    console.log(jsonRes); // Step 3
  } catch(error) {
    console.error(error); // Step 4 handle errors!
  }
}

getRandomQuote();
```