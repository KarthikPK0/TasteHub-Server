const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min: 0,
        max: 5
    }
})

const menus = mongoose.model("menus",menuSchema) 

module.exports = menus