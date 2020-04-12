const router = require('express').Router();
let Store = require('../models/store.model');

router.route('/').get((req, res) => {
  Store.find()
    .then(store => res.json(store))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newStore = new Store({name});

  newStore.save()
    .then(() => res.json('store added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;