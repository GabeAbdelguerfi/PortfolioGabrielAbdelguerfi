const router = require('express').Router();
let User = require('../models/user.model');
let Product = require('../models/products.model');

router.route('/').post((req, res, next) => {
  User.findOne({username: req.body.user.username})
    .then(users => {
      console.log('req.body password : ' + req.body.user.password)
      console.log('User pass : ' + users.password)
      if ( req.body.user.password == users.password ) {
        res.json({success: true});
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log('username : ' + req.body.username)
  console.log('password : ' + req.body.password)
  const newUser = new User({
    username: req.body.username, 
    password: req.body.password, 
    balance: 500.00, 
    cart: []
  });

  console.log('username : ' + newUser.username)
  console.log('password : ' + newUser.password)
  console.log('balance  : ' + newUser.balance)
  console.log('cart     : ' + newUser.cart)

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get-cart').post( ( req, res ) => {
  console.log( 'username : ' + req.body.username )
  
  
  User.findOne( { username: req.body.username } )
    .then ( ( user ) => {
      res.json(user.cart)
    })
})

router.route('/add-to-cart').post((req, res) => {
  User.findOne({username: req.body.user})
    .then ( (users) => {
      let arr = users.cart;
      arr.push(req.body.p_id)
      users.cart = arr;
      users.save();
    })
    .catch ( (res) => console.log(res))
})

router.route('/remove-from-cart').post((req, res) => {
  User.findOne({username: req.body.username})
    .then ((users) => {
      let arr = [{}]
      users.cart = arr;
      users.save()
      res.json({success: true})
    }).catch((err) => { console.log(err) })
})

router.route('/checkout').post( (req, res) => {
  console.log('checkout called')
  User.findOne({username: req.body.username})
    .then( (user) => {
      console.log('user balance : ' + user.balance)
      console.log('object price : ' + res.body.price)
      user.balance = user.balance - res.body.price;
    })
    .catch (( err ) => {
      res.json({error: err})
    })
})

module.exports = router;