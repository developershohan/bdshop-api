import express from "express";
import authenticate from "../middleware/authenticate.js";
import { addItemToCart, findUserCart } from "../controllers/cart.controller.js";

const router = express.Router();


router.get("/", authenticate, findUserCart)
router.put("/add", authenticate, addItemToCart)


export default router