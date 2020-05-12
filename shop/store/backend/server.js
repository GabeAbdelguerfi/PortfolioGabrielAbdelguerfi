const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const session = require('express-session')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use( session ({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(cors());
app.use(express.json());
mongoose.set('useFindAndModify', false);


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const productsRouter = require('./routes/product');
const storeRouter = require('./routes/store');
const usersRouter = require('./routes/users');

app.use('/products', productsRouter);
app.use('/store', storeRouter);
app.use('/users', usersRouter);


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});