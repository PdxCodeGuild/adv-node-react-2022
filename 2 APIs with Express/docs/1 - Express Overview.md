
# Express Overview
**Express.js** is a fast, unopinionated, backend web framework for Node.js. 

From [MDN's Express/Node tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs):

Express provides:
- Methods to specify what function is called for a particular HTTP verb (GET, POST, SET, etc.) and URL pattern ("Route")
- Methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. 

You can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc. You can use any database mechanism supported by Node (Express does not define any database-related behavior).

### Relationship between Node and Express 
Express is a library that runs in the Node runtime. Express provides features that make server-side web development with Node easier, such as help in handling HTTP traffic.

Technically we can do everything Express provides with Node alone, but Express just makes things easier. 

Express is minimalistic, but there are middleware packages that cover almost any web dev need. Check out official Express middleware and popular third party packages [here](http://expressjs.com/en/resources/middleware.html).

## Use
### Install

After you have initiated your project using `yarn init` or `npm init`, install `express` to your dependencies:
```
yarn add express 
// OR
npm install express
```

### HelloWorld Example
HelloWorld is essentially the simplest Express app you can make.
In `index.js` in your project directory:
```js
const express = require('express'); 
const app = express();

app.get('/', (req, res) => {
  res.send({hello: 'world!'});
});

app.listen(5000, () => console.log('Server listening at port 5000'));
```
Run `node ./index.js` 
and on [localhost:5000](localhost:5000) you should see the following:
```json
{"hello": "world!"}
```

##### Code breakdown
Let's break down what's actually going on here:

This app starts a server and listens on port 5000 for connections. The app handles `GET` requests at `'/'`, or the **route**, with a callback function that responds with JSON `{"hello":"world!"}`. You'll get **404 Not Found** if you try to access any other route. Try, for instance [localhost:5000/home/](localhost:5000/home/). You'll get this message: `Cannot GET /home/`.

### Route handlers
Let's analyze lines 4-6 further:
```js 
app.get('/', (req, res) => {
  res.send({hello: 'world!'});
});
```
This is a **route handler**. It handles HTTP requests at a particular route.

| app | req method | route | request | response | callback function          |
| --- | ---------- | ----- | ------- | -------- | -------------------------- |
| app | get        | '/'   | req     | res      | res.send({hello:'world!'}) |
- `app` is the Express application you register this route handler with.
- `get` tells our `app` to listen for incoming HTTP GET requests. 
- `'/'` is our route. It is first parameter of an Express app's route handler. This route tells our `app` to listen for GET requests trying to access `'/'`.
- The second parameter is a *callback function* that is invoked when a request of that type is made on that route.
- `req` is the incoming request object
- `res` is the outgoing response object
- `res.send({hello:'world!'})` sends JSON back to whoever made the request.

Almost everything we do in Express will be a variation of the code above. We'll use Express to create route handlers that handle the logic of what to do when requests are made to certain routes.

#### HTTP requests
Express can create route handlers for the following HTTP request methods: GET, POST, PUT, PATCH, DELETE
- `app.get()` read from server
- `app.post()` send to server
- `app.put()` update all the properties of something from server
- `app.patch()` update some properties of something
- `app.delete()` delete from server