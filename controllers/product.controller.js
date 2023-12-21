import { createProduct } from "../services/product.service";

// createProduct
const createProduct = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// deleteProduct
const deleteProduct = async (req, res) => {

    const productId = req.params.id

    try {
        const product = await deleteProduct(productId);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// updateProduct
const updateProduct = async (req, res) => {

    const productId = req.params.id

    try {
        const product = await updateProduct(productId, req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// findProductById
const findProductById = async (req, res) => {

    const productId = req.params.id

    try {
        const product = await findProductById(productId);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// findProductById
const getAllProducts = async (req, res) => {

    const productId = req.params.id

    try {
        const products = await getAllProcucts(req.query);
        return res.status(201).send(products)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

// findProductById
const createMultipleProducts = async (req, res) => {

    const productId = req.params.id

    try {
        const products = await createMultipleProducts(req.body);
        return res.status(201).send({message: "Products created successfully"})
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

export {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts
}