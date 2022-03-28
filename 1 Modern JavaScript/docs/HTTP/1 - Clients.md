
# HTTP Clients

HTTP Clients are used to communicate to web servers and retrieve data, this will most likely be an **API endpoint**. 

API Endpoints are just specific routes in a web application that return back structured data, no styling or display information like regular HTML webpages have. 

In this class we'll use an `npm` package called `axios` to do all our client-side AJAX and server-side HTTP requests. Axios is Promised based out of the box and has an easier to read syntax than some of the other libraries. However there are more [options](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html)!

Some people who've done their research have probably heard of the `fetch` api, which is almost standard in every modern browser. However `fetch` has it's problems for more complex requests and does not work on the server-side.

**[Here](https://flaviocopes.com/node-axios/) is a great guide going into more detail about `axios`!**

## Axios Example

```js
const axios = require('axios');

//
// Using promises (notice how this spawns off a promise that you can't reuse!)
// (This is a bad practice, but in this simple example it's okay.)
//
const printTodos = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => { 
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//
// Using async/await
//
const asyncPrintTodos = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response.data);
  } catch(error) {
    console.error(error);
  }
};

// Print our todos!
printTodos();
```
