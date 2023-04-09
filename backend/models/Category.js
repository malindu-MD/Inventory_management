const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const categorySchema=new Schema({
    category_name:{
        type:String,
        required:true
    },
    category_desc:{
        type:String,
        required:true
    },
    Status:{
         type:Number,
         required:true
    },
    Image:{
        type:String,
        required:true
    }
    
})
//pass table name and schema asa parameter
const Category=mongoose.model("category",categorySchema);
module.exports=Category;
