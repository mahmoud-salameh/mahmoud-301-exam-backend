'use strict';


const  axios = require('axios');
const {drinksSchema ,drinkModle} = require('../model/Data.model');

const updateData = (req, res) => {

    data[0].strDrink  = strDrink

    data[0].strDrinkThumb = strDrinkThumb
    data[0].save();
    .then(() => {
        drinkModle.find({}, (error ,data) = > {
            res.send(data)
        })
    })

}
module.exports = updateData