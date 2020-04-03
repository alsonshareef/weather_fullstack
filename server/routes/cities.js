const express = require('express');
const Cities = require('../models/cities');

const router = express.Router();

// GET -- Retrieve all cities stored in database.
router.get('/', (req, res) => {
  Cities.retrieveAll((err, cities) => {
    if (err) {
      return res.json(err);
    }
    return res.json(cities);
  });
});

// CREATE -- Add a new city into the database.
router.post('/', (req, res) => {
  let city = req.body.city;

  Cities.insert(city, (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json(result);
  });
});

module.exports = router;
