import { Rating } from "../models/rating.model.js";
import { findProductById } from "./product.service.js";

// create a new rating

const createRating = async (reqData, user) => {
    try {
        const product = await findProductById(reqData.productId)
        const rating = new Rating({
            rating: reqData.rating,
            comment: reqData.comment,
            user: user._id,
            product: product._id
        })
        await product.save()
        return await rating.save()

    } catch (error) {
        throw new Error(error.message);

    }
}

// getAllRatings

const getAllRatings = async (productId) => {

    try {
        const product = await findProductById(productId)
        const ratings = await Rating.find({ product: product._id }).populate("user")
        return ratings
    } catch (error) {
        throw new Error(error.message)}
}

export {
    createRating,
    getAllRatings
}