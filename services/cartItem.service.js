import userService from "../services/user.service.js"

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
        else{
            
            throw new Error(" You can't update this cart item");
        }

    } catch (error) {
        throw new Error(error.message);

    }

}