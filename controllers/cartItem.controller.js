// import files

import { updateCartItem } from "../services/cartItem.service.js";

// update Cart Item
const updateCartItem = async (req,res) => {
    try {

        const updateCartItem = await updateCartItem(user._id, req.params, req.body);
        return res.status(200).send(updateCartItem)
        
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// remove Cart Item
const removeCartItem = async (req,res) => {
    try {

       await removeCartItem(user._id, req.params.id);
        return res.status(200).send({message: "cart Item removed successfully"})
        
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

export {
    updateCartItem,
    removeCartItem
}