const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const invoiceRouter = require('./routes/invoiceRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/invoices', invoiceRouter);

module.exports = app;
