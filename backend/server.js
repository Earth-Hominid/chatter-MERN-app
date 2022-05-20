const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDatabase = require('./config/db');
const port = process.env.PORT || 5001;

connectDatabase();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
