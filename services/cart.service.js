import { Cart } from "../models/cart.model.js";
import { cartItem } from "../models/cartItem.model.js";
import { Product } from "../models/product.model.js";


// create cart
export const createCart = async (user)=>{
try {
    const cart = new Cart({user})

    const createCart = await cart.save()
    return createCart
    
} catch (error) {
    throw new Error(error.message);
}
}

Product
// find user cart
export const findUserCart = async(userId)=>{
    try {
        const cart = await Cart.findOne({user})
        const cartItems = await cartItem.find({cart:cart._id}).populate("product")

        cart.cartItems = cartItems

        let totalPrice = 0
        let totalDiscountPrice = 0
        let totalItem = 0

        for (let cartItem of cart.cartItems) {
            
            totalPrice += cartItem.price
            totalDiscountPrice += cartItem.discountPrice
            totalItem+= cartItem.quantity
            
        }

        cart.totalPrice = totalPrice
        cart.totalDiscountPrice = totalPrice - totalDiscountPrice
        cart.totalItem = totalItem

        return cart

        
    } catch (error) {
        throw new Error(error.message);

    }
}

// add cart item
export const addCartItem = async (userId,req)=>{
    try {

        const cart = await Cart.findOne({user:userId})
        const product = await Product.findById(req.productId)
        
    } catch (error) {
        throw new Error(error.message);

    }
}