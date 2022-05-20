# Chatroom | Members-Only Message App

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

A chatroom app using ExpressJS and NodeJS.

## Description

The purpose of this project is to practice authentication using Node, Express, Brcypt and JSON Web Tokens (JWT).

Chatter is a chatroom application in which users can become members and post messages. If they are a member, they can view messages and user data, however, to non-users/members, they can read posts but the poster information is anonymous.

The front end UI is built with React and Tailwind.

## Features

Added a middleware folder to assist when the 'req.body.message' causes an error. Instead of returning html, the error middleware will overwrite the "express error handler" and provide the stack information when in development mode.

```js
const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { handleError };
```

### Dependencies & Development Dependencies

- [Express](https://expressjs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/) - Development dependency
- [Mongoose](https://mongoosejs.com/)
- [Express Async Handler](https://github.com/Abazhenov/express-async-handler)
- [Colors](https://www.npmjs.com/package/colors) - Colored text for the console.
