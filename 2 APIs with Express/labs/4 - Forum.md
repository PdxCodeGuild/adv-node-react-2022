
# Lab 4: Forum

**Create a simple API to mimic the functionality of a basic forum (aka message board).**

## Version 1

Your forum must have a user system with `jwt` authentication, and will contain the following models:

Models:

* A `User` model that will store user information.
* A `Board` model that will have a name and a list of related posts.
* A `Post` model that contains information about a post, the `Board` it belongs to and the `User` who posted it.

Routes:

* CRUD for the `Post` model.
* CRUDL for the `Board` model.
* A profile route for `User` that shows not only information about the currently logged in user but also every post they've made.


Authentication Rules:

* Only authenticated users can create or modify the `Board` and `Post` models.
* User's can only delete their own posts and boards.

## Version 2 (Extra Credit)

Add a field to the `User` model that specifies if a user is an administrator or not. Only allow administrators to create boards, and delete posts that aren't theres.
