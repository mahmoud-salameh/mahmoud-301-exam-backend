'use strict';

const axios = require('axios');

const {drinksSchema ,drinkModle} = require('../model/Data.model');

const getData = (req , res) => {

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then(response => {
        res.send(response.data.drinks)
    }).catch()


}

module.exports = getData