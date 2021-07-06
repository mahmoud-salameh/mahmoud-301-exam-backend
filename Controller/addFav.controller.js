'use strict';

const {drinksSchema ,drinkModle} = require('../model/Data.model');

const addFav = (req, res) => {

const { strDrink, strDrinkThumb} = req.body;

const obj = new drinkModle ({strDrink: strDrink, strDrinkThumb: strDrinkThumb})

obj.save()

}

module.exports = addFav