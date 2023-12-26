
import userService from "../services/user.service.js"
import { cartItem } from "../models/cartItem.model.js";

// update Cart Item
const updateCartItem = async (userid, cartItemId, cartItemData) => {

    try {

        const item = await findCartItemById(cartItemId)

        if (!item) {

            throw new Error("cart item not found: ", cartItemId);
        }
        if (!user) {
            throw new Error("User not found: ", userid);

        }

        if (user._id.toString() === userid.toString()) {
            item.quantity = cartItemData.quantity
            item.price = quantity * item.product.price
            item.discountedprice = item.quantity * item.product.discountedprice
            const updatedCartItem = await item.save()
            return updatedCartItem
        }
        else {

            throw new Error(" You can't update this cart item");
        }

    } catch (error) {
        throw new Error(error.message);

    }

}

// remove cart item
const removeCartItem = async (userId, cartItemId) => {

    try {

        const item = await findCartItemById(cartItemId,userId)
        const user = await userService.findUserById(userId)

        if (!item) {

            throw new Error("cart item not found: ", cartItemId);
        }
        if (!user) {
            throw new Error("User not found: ", userId);

        }

        if (user._id.toString() === userId.toString()) {
  
            return  await cartItem.findByIdAndDelete(cartItemId)
             
        }
        else {

            throw new Error(" You can't update this cart item");
        }

    } catch (error) {
        throw new Error(error.message);

    }

}

// find cart by id

const findCartItemById = async (cartItemId) => {

    try {

        const cartItems = await cartItem.findById(cartItemId)
        console.log(cartItems);
        // const cartItem = await findCartItemById(cartItemId)

        if (cartItems) {
            return cartItems
            
        } else {
            throw new Error("User not found: ", userId);
            
        }

    } catch (error) {
        throw new Error(error.message);

    }

}

export default { updateCartItem,removeCartItem,findCartItemById }