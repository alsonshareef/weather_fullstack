const database = require('../database');

class Cities {
  static retrieveAll(callback) {
    database.query('SELECT city_name from cities', (err, res) => {
      if (err.error) {
        return callback(err);
      }
      callback(res);
    });
  }

  static insert(city, callback) {
    database.query(
      'INSERT INTO cities (city_name) VALUES ($1)',
      [city],
      (err, res) => {
        if (err.error) {
          return callback(err);
        }
        callback(res);
      }
    );
  }
}

module.exports = Cities;
