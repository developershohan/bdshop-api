import express from "express";
import authenticate from "../middleware/authenticate.js";
import { removeCartItem, updateCartItem } from "../controllers/cartItem.controller.js";
const router= express.Router();

router.patch("/:id", authenticate, updateCartItem)
router.delete("/:id", authenticate, removeCartItem)

export default router