import { createOrder, findOrderById } from "../services/order.service.js";

// createOrder
const createOrder = async (req, res) => {
    const user = req.user

    try {
        let createOrder = await createOrder(user, req.body)
        return res.status(201).send(createOrder)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}


// findOrderById
const findOrderById = async (req, res) => {
    const user = req.user

    try {
        let findOrderById = await findOrderById(req.params.id)
        return res.status(201).send(findOrderById)
    } catch (error) {
        throw new Error(error.message)
    }
}
// findOrderById
const OrderHistory = async (req, res) => {
    const user = req.user

    try {
        let orderHistory = await findUserOrderHistory(user._id)
        return res.status(201).send(orderHistory)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

export {
    createOrder,
    findOrderById,
    OrderHistory
}