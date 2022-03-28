
# Lab 3: Forecaster (OpenWeatherMap API)

**Write a program that will display the forecast in a selected city.**

1. Get an API key from OpenWeatherMap [here](https://openweathermap.org/appid)
2. Use `axios` to send a request to get the forecast for a location
3. Look in OpenWeatherMap's documentation to see the specifics and how to format a query, use the helper function below
4. Figure out the structure of the data and find the next 4 hours of weather
5. Print it to the screen in a human readable manner

---

**Use this to help build your API URL:**
```js
//
// This function takes an object and converts it into
// a valid query param string.
//
const buildQueryParams = (params) => {
  let queryString = '?';

  Object.keys(params).forEach((key) => {
    queryString += `${key}=${params[key]}&`;
  });

  return queryString.slice(0, -1);
};

// Same thing but in a purely functional syntax
const buildQueryParamsPure = (params) => (
  Object
    .keys(params)
    .reduce((q, k) => q + `${k}=${params[k]}&`, '?')
    .slice(0, -1)
);

// Usage:
const queryParams = buildQueryParams({
  hello: 'world',
  query: true,
});

console.log(queryParams); // ?hello=world&query=true
```
