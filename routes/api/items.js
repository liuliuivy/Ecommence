const express = require('express');
const axios = require('axios');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  axios.post('https://amazon-product-lookup.herokuapp.com/', req.body )
    .then(resAmz => {
      console.log(resAmz.data);
      const newItem = new Item({
        asin: resAmz.data.asin,
        price: resAmz.data.price,
        rank: resAmz.data.rank
      });
      newItem.save().then(item => res.json(item));
    }, err => { console.log(err) }) 
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
