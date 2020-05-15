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
  const description = req.body.description;

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

    router.get("/products_by_id", (req, res) => {
      let type = req.query.type
      let productIds = req.query.id
  
      console.log("req.query.id", req.query.id)
      console.log("hi")
      if (type === "array") {
          let ids = req.query.id.split(',');
          productIds = [];
          productIds = ids.map(item => {
              return item
          })
      }
  
      console.log("productIds", productIds)
  
      //we need to find the product information that belongs to product Id 
      Product.find({ '_id': { $in: productIds } })
          .populate('writer')
          .exec((err, product) => {
              if (err) return res.status(400).send(err)
              return res.status(200).send(product)
          })
  });

  router.route('/get-product/').post( ( req, res ) => {
    Product.findOne({ _id : req.body.p_id})
      .then ( ( res ) => {
        res.json(res)
      }) 
  })
    
  router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
      .then(products => {
        products.itemname = req.body.itemname;
        products.price = req.body.price;
        products.imageUrl = req.body.imageUrl;
        products.description = req.body.description;
        
      products.save()
      .then(() => res.json('Product updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;