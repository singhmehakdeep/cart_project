const mongoose = require("mongoose");
const shortId = require("shortid");

const Product = mongoose.model("products",new mongoose.Schema({
    _id:{type:String,default: shortId.generate},
    title:String,
    description:String,
    image:String,
    price:Number,
    availableSizes:[String],
}));

module.exports = Product