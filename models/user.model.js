import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "Customer"
    }, 
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }],

    paymentAddress: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment_address"
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings"
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews"
    }]
},
{timestamps: true})

export const User = mongoose.model("users", userSchema)