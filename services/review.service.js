import { Review } from "../models/review.model";
import { findProductById } from "./product.service";

// create review

const createReview = async (reqData, user) => {
    try {
        const product = await findProductById(reqData.productId)
        const review = new Review({
            review: reqData.review,
            user: user._id,
            product: reqData.product
        })
        await product.save()
        return await review.save()

    } catch (error) {
        throw new Error(error.message);

    }
}

// getAllReviews
const getAllReviews = async (productId) => {

    try {
        const product = await findProductById(productId)
        const reviews = await Review.find({ product: product._id }).populate("user")
        return reviews
    } catch (error) {
        throw new Error(error.message)}
}

export {
    createReview,
    getAllReviews
}