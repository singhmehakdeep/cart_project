const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortId = require("shortid");


const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/react-shopping-cart-db",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

const Product = mongoose.model("products",new mongoose.Schema({
    _id:{type:String,default: shortId.generate},
    title:String,
    description:String,
    image:String,
    price:String,
    availableSizes:[String],
}));

app.get("/api/products",async(req,res) => {
    const products = await Product.find({});
    res.send(products);
})

app.post("/api/products",async(req,res) => {
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save(); 
    res.send(saveProduct)
})

app.delete("/app/products/:id",async (req,res) => {
    const deleteProduct = await Product.findById(req.param.id);
    res.send(deleteProduct);
})

const port = process.env.PORT || 4000;
app.listen(port,() => console.log("running on port 4000"))