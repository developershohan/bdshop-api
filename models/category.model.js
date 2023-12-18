import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlenght: 50
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    level: {
        type: number,
        required: true
    }
})


export const category = mongoose.model('categories', categorySchema)