import mongoose from "mongoose"
  
const ownerSchema = mongoose.Schema({
    fullname: {
       type:String,
       minLength:3,
       trim:true,
    },
    email: String,
    password: String,
    products: {
      types:Array,
      default: []
    },
    picture: String,
    gstin:String,
})

const ownermodel = mongoose.model("owner",ownerSchema);

export default ownermodel;