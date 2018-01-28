## APP's Key Architecture 
* Javascript (ES6)
* Node/Express (Framework)
* Handlebars (View templating engine)
* BootStrap (CSS Framework)
* Node Libraries
  - axios (to make api request)

I'm javascript junkie at heart (dont judge me) and usually for any trivial project I would use the React library. However, this time I chose to make a simple express app to model a more MVC Architecture. Most of the logic related to this challenge is in the path: `./routes/index.js`.

## Start The Application

To start the application simply clone this repo then run:
`npm install` followed by,
`npm start` to start a local development server

## Technical questions

### 1. How long did you spend on this technical challenge? What would you add to your solution if you had more time?

Unfortunetly I only had a total of 8 hours to focus on this challenge. If I had more time I would've added better styling (it's currently very basic) and pagination so users could see all 100 results allowed by the basic api plan.

### 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The most useful feature added to the latest version of javascript would be async/await. This feature allows me program asynchronous code in a procedural style. An example of this is the implentation of the "getAPI" function used in this challenge:
```javascript
  const getAPI = async (path, params = {params: queryObj}, baseUrl = API_URL) => {
    const APIKeyRequestHeader = { }
    const fullPath = baseUrl + path
    APIKeyRequestHeader['user-key'] = API_KEY

    return await axios.get(fullPath, {...params, headers: APIKeyRequestHeader} )
  }
```
### 3. How would you track down a performance issue in production? Have you ever had to do this?

To be completely honest, I mainly only deal with code in development (smh).

### 4. How would you improve the Zomato API that you just used?

The "/reviews" request is lacking a little bit in my opinion. Currently there is no access to the resturants' names through this request. If I were to make a change, I would simply place the resturants' name at the root object literal.

### 5. Please describe yourself using JSON.
```javascript
  {
    "name": {
      "first": "Craig",
      "last": "Thomas"
    },
    "occupation": "Electrical Engineer",
    "interests": ["programing", "electronics", "music"],
    "location": "New York, NY"
  }
```