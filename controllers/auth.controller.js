// import files
import { createUser, getUserByEmail } from "../services/user.service.js"
import { generateToken } from "../config/jwtProvider.js"
import bcrypt from "bcrypt"
import { createCart } from "../services/cart.service.js"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"


// user registration
const register = async (req, res) => {

    try {
        const user = await createUser(req.body)
        const jwt = generateToken(user._id)


        await createCart(user)

        return res.status(200).send({ user, jwt, message: "register successfull" })

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

}

// user login
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await getUserByEmail(email)

        if (!user) {
            return res.status(404).send({ message: 'User not found', email })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Password is not valid...' })
        }
        const jwt = generateToken(user._id)
        res.status(200).send({ jwt, user, message: "login successful" })
        // res.cookie("generateToken",generateToken)
        
        // const loginUser = await User.findOne({ email })
        // if (!loginUser) {
        //     return res.status(404).send({ message: 'Useris not found', email })
        // }
        // const isPasswordValid = await bcrypt.compare(password, user.password)

        // if (!isPasswordValid) {
        //     return res.status(401).send({ message: 'Password is not valid...' }) }
            
        //     res.status(200).send({ jwt, User, message: "login successful" })

       
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }


}


export { register, login }