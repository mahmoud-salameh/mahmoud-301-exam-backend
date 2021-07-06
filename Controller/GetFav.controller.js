'use strict';



const {drinksSchema ,drinkModle} = require('../model/Data.model');

const getFav = (req, res) =>{

    drinkModle.find({}, (error , data) =>{
        res.send(data)
        // console.log(data)
    })
}

module.exports = getFav