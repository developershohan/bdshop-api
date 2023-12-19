import userService from "../services/user.service.js"

// update Cart Item

const updateCartItem = async (userid, cartItemId, cartItemData)=>{

    try {

        const item = await findCartItemById(cartItemId)

        if (!item) {
            
            throw new Error("cart item not found: ", cartItemId);
        }
        
        
    } catch (error) {
        throw new Error(error.message);
 
    }

}