'use strict';

const {drinksSchema ,drinkModle} = require('../model/Data.model');

const deleteFav = (req, res) => {

    const id =req.query._id

    drinkModle.findByIdAndDelete(id ,(error , data)=>{
        res.send(data)
    })

}
module.exports = deleteFav