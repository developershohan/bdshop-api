import { mongoose } from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Type.objectId,
        ref: "users",
        required: true
    },
    cartItem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItems",
        required: true
    }],
    totalPrice:{
        type: Number,
        required: true,
        default: 0
    },
    totalItem:{
        type: Number,
        required: true,
        default: 0
    },
    totalDiscountPrice:{
        type: Number,
        required: true,
        default: 0
    },
    Discount:{
        type: Number,
        required: true,
        default: 0
    }
})


export const Cart = mongoose.model("carts", cartSchema)