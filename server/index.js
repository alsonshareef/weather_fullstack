const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/cities', require('./routes/cities'));
app.use('/api/weather', require('./routes/weather'));

app.get('/', (req, res) => {
  res.send('Weather App.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

/**
 * DATABASE CONFIG
 */
const database = require('./database');

database.query('SELECT NOW()', (err, res) => {
  if (err.error) {
    return console.log(err.error);
  }
  console.log(`PostgreSQL connected: ${res[0].now}.`.blue.bold);
});
