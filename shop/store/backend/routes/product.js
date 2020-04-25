const router = require('express').Router();
let Product = require('../models/products.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const itemname = req.body.itemname;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;

  const newproduct = new Product({
    itemname,
    price,
    imageUrl
  });

      newproduct.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    });

    router.route('/:id').get((req, res) => {
      Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    router.route('/:id').delete((req, res) => {
      Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
    
    router.route('/update/:id').post((req, res) => {
      Product.findById(req.params.id)
        .then(products => {
          products.itemname = req.body.itemname;
          products.price = req.body.price;
          products.imageUrl = req.body.imageUrl;
          
        products.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;