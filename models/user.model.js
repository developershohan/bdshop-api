import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"Customer"
    },
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addresses"
    }]
})

export default mongoose.model("User", userSchema)