const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  itemname: { type: String, required: true },
  price: { type: String, required: true },
}, {
  timestamps: true,
});

const products = mongoose.model('Products', productsSchema);

module.exports = products;