
# Mongoose Overview
[Mongoose](http://mongoosejs.com/) is a MongoDB object modeling tool (an Object Data Model or *ODM*, also known as  Object Relational Mapping or *ORM*) designed to work in an asynchronous environment. 

## Setup MongoDB and Mongoose
This documentation is written as a continuation of our [MongoDB Overview docs](./Mongo%20Overview.md). You are expected to have created a MongoDB deployment. 

We use [mLab](https://mlab.com/):
1. Set up an account 
4. Create a new MongoDB deployment
3. Add database user

### Install Mongoose 
We are using the latest version of Mongoose at this time (5.2.7) with MongoDB 3.6.6.
```
> yarn add mongoose@5.2.7
// OR 
> npm install mongoose@5.2.7
```

## Use
### Connect Mongoose to MongoDB
Import Mongoose and [connect to Mongo URI](https://docs.mlab.com/connecting/#connect-string).

```js
const mongoose = require('mongoose');
mongoose.connect('your-mongo-db-uri')
```

Note that your Mongo URI should be a *secret*, so you should put it inside `./config/keys` and import it to `index.js`.
```js
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
```

### Define schema and create model
Models are *defined* using the `Schema` interface. The schema defines the **fields** and their corresponding **types** and **parameters** stored in each document. 

Your models can also contain static and instance helper methods, as well as **virtual properties** that behave just like any other field (but aren't actually stored in the database).

Schemas are *compiled* into models using the `mongoose.model()` method. After instantiating a model, you can use model CRUD methods to query the document in your database.

```js
// Require Mongoose
const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

const todoSchema = new Schema({
    text: String,
    completed: Boolean
})

// Compile model from schema
const Todo = mongoose.model('todo', todoSchema)
```

#### Mongoose schema types
- `String`
- `Boolean`
- `Number`
- `Date`
- `[]` (Array)
- `Buffer`
- `Schema.Types.Mixed`
- `Schema.Types.ObjectId`

#### Options
You can define your fields with **options**, such as *default values*, *validators* (such as max/min values and custom validation functions), *required*, and *string formatting* for String types.

Example of schemas with options:
```js 
const personSchema = new Schema(
{
  firstName: String,
  lastName: String,
  living: {type: Boolean, default: true},
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } }
})
``` 

#### Validators
You can specify validator types with error messages:
```js 
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'too few eggs :('],
    max: 12,
    required: [true, 'no no eggs?']
  },
  drink: {
    type: String,
    enum: ['coffee', 'juice', 'tea', 'water']
  }
});
```

Read more about validation [here](https://mongoosejs.com/docs/validation.html).

#### Virtual properties
Virtual properties, or **virtuals** are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for decomposing a single value into multiple values for storage.

Consider the following person schema/model/document:
```js
// Define schema
const personSchema = new Schema({
name: {
  first: String,
  last: String
}
});

// Compile model
const Person = mongoose.model('Person', personSchema);

// Create document
let dd = new Person({
	name: { first: 'Danny', last: 'Devito' }
});
```

To print out a person's full name, you could do it manually...
```js 
console.log(dd.name.first +' '+ dd.name.last) // Danny Devito
```
... but this can easily get cumbersome.

Instead, you can define a fullName virtual property:
```js 
personSchema.virtual('fullName').get(() => {
  return this.name.first + ' ' + this.name.last
})
``` 

Mongoose will call your getter function whenever you access the `fullName` property.

```js
console.log(dd.fullName) // Danny Devito
```

Read more about virual properties [here](https://mongoosejs.com/docs/guide.html#virtuals).

### CRUD documents
Creation, queries, and modifications of documents are asynchronous operations. You must supply a callback function for when the operation completes. The first argument of these callbacks is an **error**, then the **document instance**.

#### Create
```js
let todo = new Todo({text: 'wash cat', completed: false})
todo.save((error, document) => {
	...
})

```

#### Read
```js
Todo.findOne({text: 'wash cat'}, (error, todo) => {
	...
})

// Find all instances of completed todos
Todo.find({completed: true}, (error, document) => {
	...
})
```

#### Update
```js
Todo.findOne({text: 'wash cat'}, (error, todo) => {
	todo.set()
	todo.save((error, document) => {
		...
	})
})
```

#### Delete
```js
Todo.findOne({text: 'wash cat'}, (error, todo) => {
	todo.remove((error) => {
		...
	})
})
```

### Make queries
You can make queries by passing in **criteria** into your [read/find methods](#read).

```js
```


### Mongoose model methods 
- `Model.find(criteria, [fields], [options], [callback])`: find document; callback has error and documents arguments
- `Model.count(criteria, [callback]))`: return a count; callback has error and count arguments
- `Model.findById(id, [fields], [options], [callback])`: return a single document by ID; callback has error and document arguments
- `Model.findByIdAndUpdate(id, [update], [options], [callback])`: executes MongoDB's findAndModify to update by ID
- `Model.findByIdAndRemove(id, [options], [callback])`: executes MongoDB's findAndModify to remove
- `Model.findOne(criteria, [fields], [options], [callback])`: return a single document; callback has error and document arguments
- `Model.findOneAndUpdate([criteria], [update], [options], [callback])`: executes MongoDB's findAndModify to update
- `Model.findOneAndRemove(id, [update], [options], [callback])`: executes MongoDB's findAndModify to remove
- `Model.update(criteria, update, [options], [callback])`: update documents; callback has error, and count arguments
- `Model.create(document(s), [callback])`: create document object and save it to database; callback has error and document(s) arguments
- `Model.remove(criteria, [callback])`: remove documents; callback has error argument

### Mongoose document methods
- `save([callback])`: save the document; callback has error, document, and count arguments
- `set(path, val, [type], [options])`: set value on the document's property
- `get(path, [type])`: get the value
- `isModified([path])`: check if the property has been modified
- `populate([path], [callback])`: populate reference
- `toJSON(options)`: get JSON from document
- `validate(callback)`: validate the document