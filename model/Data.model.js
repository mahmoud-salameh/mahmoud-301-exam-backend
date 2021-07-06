'use strict';
require('dotenv').config();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/drinks', 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('we re connected!') 
});

const drinksSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
  });

  const drinkModle = mongoose.model('drinks', drinksSchema);

  module.exports = {drinksSchema ,drinkModle}
