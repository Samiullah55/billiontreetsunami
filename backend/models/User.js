const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    aspect:{
        type:String,
        required:true,
    }
});

module.exports=User=mongoose.model("User",UserSchema);