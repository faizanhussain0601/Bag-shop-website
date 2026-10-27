import mongoose from "mongoose";

mongoose
.connect("mongodb://127.0.0.1:27017/scratch")
.then(function(){
    console.log("Connectecd");
})
.catch(function(err){
    console.log(err)
})

export default mongoose;