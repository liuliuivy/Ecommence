const express = require('express');
const axios = require('axios');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

router.post('/', (req, res) => {
  axios.post('https://amazon-product-lookup.herokuapp.com/', req.body)
    .then(resAmz => {
      const newItem = new Item({
        asin: resAmz.data.asin,
        price: resAmz.data.price,
        rank: resAmz.data.rank
      });
      return newItem.save();
    })
    .then(item => res.json(item))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
