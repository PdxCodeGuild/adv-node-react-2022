
# React Overview

### What is React?
React is a fast, reactive front-end framework. It's an efficient, flexible JavaScript library for building user interfaces.

You can find out all the details [here](https://reactjs.org/)!

# Getting Started
Let's create our first React app. We can do this without installing anything, simply by using a CDN.

We will begin with a html file and some general boilerplate.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">Please enable JavaScript to view this page.</div>
</body>
</html>
```

Next we will add the react and react-dom CDN to our head.
```html
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
```

Now let's create our first react app.
Inside a script tag at the bottom of our body we will create an arrow function for our app and use ReactDOM to render that app to our page.

```html
<script>
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
</script>
```

At this point we should see `Hello World` on the page.

If we can make an `App` element and render it to the page, can we create other elements too? Yes we can! And we call these components.

Let's start by moving our `App` into its own file called App.js. We can then rearrange our script tag like so:
```html
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
<script defer src="./App.js"></script>
```
> Note: we must place our script tag **below** the react and react-dom cdn in order to have access to react. We may also want to add the defer attribute to our script tag to ensure our page loads before we run our JavaScript

We will create a Menu Item like so:
```javascript
const MenuItem = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Pizza"),
		React.createElement("h2", {}, "Price: $4"),
		React.createElement("h2", {}, "Calories: 200"),
	]);
};
```
Notice this time we are passing an array of createElements.

In order to use our new Menu Item, we can use createElement again to add it to our dom.

```javascript
const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Hello World"),
		React.createElement(MenuItem),
	]);
};
```

Now if we wanted to create multiple Menu Items we could simply add more createElements to our array.

```javascript
const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Hello World"),
		React.createElement(MenuItem),
		React.createElement(MenuItem),
		React.createElement(MenuItem),
	]);
};
```

This does present a unique issue however, All the menu items rendered to the page are `Pizza`. How could we keep the same structure for each menu item, yet still be able to change what that item is? 

Introducing props!

Props allow us to pass in data into each component.

```javascript
const MenuItem = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, `Price: $${props.price}`),
		React.createElement("h2", {}, `Calories: ${props.calories}`),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Hello World"),
		React.createElement(MenuItem, {
			name: "Pizza",
			price: 4,
			calories: 200,
		}),
		React.createElement(MenuItem, {
			name: "Beer",
			price: 6,
			calories: 140,
		}),
		React.createElement(MenuItem, {
			name: "Fries",
			price: 2,
			calories: 250,
		}),
	]);
};
```