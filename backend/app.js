const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'https://master--scintillating-pika-cfc211.netlify.app',
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// import routes
const user = require('./controller/user');
const order = require('./controller/order');
const payment = require('./controller/payment');

app.use('/api/v2/user', user);
app.use('/api/v2/orders', order);
app.use('/api/v2/payment', payment);

app.use(ErrorHandler);

module.exports = app;
