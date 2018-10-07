const express = require('express');
const axios = require('axios');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

router.post('/', (req, res) => {
  axios.post('https://amazon-product-lookup.herokuapp.com/', req.body)
    .then(resAmz => {
      const { rank, category, dimensions } = resAmz.data;
      const { asin } = req.body;
      const newItem = new Item({
        asin,
        rank,
        category,
        dimensions
      });
      return newItem.save();
    })
    .then(item => res.json(item))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
