const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  asin: {
    type: String,
    required: true
  },
  rank: {
    type: Number
  },
  category: {
    type: String
  },
  dimensions: {
    type: String
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
