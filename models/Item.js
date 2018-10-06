const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  asin:{
    type: String,
    required: true
  },
  price: {
    type: Number,
  },
  rank:{
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
