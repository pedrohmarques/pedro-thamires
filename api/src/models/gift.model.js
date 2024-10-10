const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  recomendation: {
    type: String,
    required: false
  },
  gifter_name: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Gift', giftSchema);