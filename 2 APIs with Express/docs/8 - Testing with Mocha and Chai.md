
# Testing with Mocha and Chai

As stated before naively testing our APIs is a tedious process and is often fragmented. For instance it's hard to know if you've broken another functionality of your code in the process of testing the current endpoint.

This is where [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) come in. We'll also use a library on top of `chai` that's meant to help with testing express routes, called `chai-http`.

## Getting started

First you need to install all of our new dependencies make sure to include the `-D` flag to add them as development only deps: 
```
yarn add -D mocha chai chai-http
```

Create a folder a called `test` in the root of your project and create a file called `helper.js`.

Inside our helper JS file we're going to configure a few things:

**helper.js**
```js
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Tell chai to use the chai-http plugin
chai.use(chaiHttp);
```

Once we've setup our test helper file we need to create a `test` command in our package.json!

**package.json**
```json
{
  scripts: {
    ...
    "test": "mocha --require ./test/helper.js ./test/**/*.test.js --exit"
  }
}
```

Now when you run `yarn test` you will start the mocha test server and it will run your tests!

## Creating a sample test

In your test folder create a file called `initial.test.js` and add the following to it, also make sure to add `app` to your `module.exports` in your server file!

```js
const chai = require('chai');
const app = require('../src/server.js');
const expect = chai.expect;

describe('I work!', () => {
  it('should not find this fake route', async () => {
    const res = await chai.request(app).get('/somenonexistantroute');

    expect(res.status).to.eq(404);
  });
});
```

Now run `yarn test` and you should get a green checkbox next to your `it` message. And that's it, now you can test the data returned from your server via the `expect` api!