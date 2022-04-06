# Lab 2:

Create a simple Mongoose model called Person and give it the following fields: `firstName`, `lastName`, `username` and `age`. 

## Version 1:
Create an instance of the model.

**Use MongoDB Compass or the shell to see that this worked correctly.**

## Version 2:
Create a simple CRUDL (**C**reate **R**etrieve **U**pdate **D**elete **L**ist) express app on the `person` model.
#### Create
Using a POST method, create a route to `/people` that will add a new person to the database.
#### Retrieve
Using a GET method, create a route to `/people/:id` that will return a json object with a given person's details.
#### Update
Using a PATCH method, create a route to `/people/:id` that will update a given person's information and return a json object with the updated person.
#### Delete
Using a DELETE method, create a route to `/people/:id` that will remove a person from the database. Return a json object with the person that had been removed.
#### List
Using a GET method, create a route to `/people` that will return a json object with all people within the database.
