import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    fullname: {
       type:String,
       minLength:3,
       trim:true,
    },
    email: String,
    password: String,
    cart:{
      types:Array,
      default: []
    },
    isadmin: Boolean,
    orders: {
      types:Array,
      default: []
    },
    contact: Number,
    picture: String
})

const usermodel = mongoose.model("user",userSchema);

export default usermodel;