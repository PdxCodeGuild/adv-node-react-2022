
# Lab 5: Twitter Clone 

Create a working version of Twitter's tweet system, don't worry about messages.

## Part 1: API

Use `express`, `mongoose`, and `passport` to structure out a basic authenticated REST API.

* Create a REST API with JWT user authentication, that allows users to post and reply to tweets.
  * Use CRUD for access to resources
* Allow users to follow each other and see those tweets in their own feed.
  * Create a one off route for this, user's must also be authenticated.
* Do not allow users to delete others tweets or allow any write access to non authenticated users.

## Part 2: UI

Use `create-react-app`, `react-router-dom` and `reactn` to setup a simple Single Page Application.

* Allow users to login or register, then store the JWT token in local storage. *(Hint: use ReactN and `addCallback` to store your JWT locally)*
* Have 5 pages:
  * Home - `/`
  * User Profile - `/:username`
  * Login - `/login`
  * Register - `/sign-up`
  * Logout - `/logout`
* Authenticated users can post from the Home page, unauthenticated users should be redirected to the login form.
* Add a hidden reply form on each Post, then allow users to reply to specific posts.