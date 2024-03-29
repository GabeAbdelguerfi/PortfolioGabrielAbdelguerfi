const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  itemname: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: {type: String, required: true},
  description: {type: String, required: true}
}, {
  timestamps: true,
});

const products = mongoose.model('Products', productsSchema);

module.exports = products;