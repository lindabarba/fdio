const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
  name: String,
  address: String
});

module.exports = mongoose.model('Food', foodSchema);
