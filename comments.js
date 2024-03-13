// Create web server
const express = require('express');
const app = express();

// Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/skills', (req, res) => {
  res.send('Skills page');
});

// Start web server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Run app, then load http://localhost:3000 in a browser to see the output.
```

## 3.4. Express Middleware

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.
- If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### 3.4.1. Application-level Middleware

- Bind application-level middleware to an instance of the app object by using app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
- The following example shows a middleware function with no mount path. This code is executed for every request to the app.

```javascript
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```

- The following example shows a middleware function mounted on the /skills path. This code is executed for any type of HTTP request on the /skills path.

```javascript
app.use('/skills', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```

### 3.4.2. Router-level Middleware

- Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
- The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

```javascript
// Path: skills.js
const express = require('express');