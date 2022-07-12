const { NextWeek } = require("@material-ui/icons");
const express = require("express")
const store=require("../models/store")
const router = express.Router()
const {listProducts}=require("../models/store")



router.get("/", (req, res,next) => {
    try{

        const products = store.listProducts();
        res.status(200).json({ products: products });
    }catch(err){
        next(err)
    }
  });


module.exports = router;