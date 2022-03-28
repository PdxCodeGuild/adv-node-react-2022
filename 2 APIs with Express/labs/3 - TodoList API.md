
# Lab 3: TodoList API

**Write a simple TodoList API that will have 2 models, one `Item` and `List`.**

## Version 1

1. Use mongoose to create a relationship between `List` and `Item`
2. Create a simple set of CRUD endpoints to work with both `List` and `Item`

## Version 2 (Extra Credit)

1. Create a `User` model and allow for basic JWT authentication
2. Tie the `List` model to specific users.
3. Only allow the user who owns a list to `create`, `update` and `delete` it and it's items
4. Let anyone view (or `read`) lists