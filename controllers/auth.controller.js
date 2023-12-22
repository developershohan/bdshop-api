// import files
import { generateToken } from "../config/jwtProvider.js"
import bcrypt from "bcrypt"
import  userService  from "../services/user.service.js"
import  cartServices  from "../services/cart.service.js"


// user registration
const register = async (req, res) => {

    try {
        const user = await userService.createUser(req.body)
        const jwt = generateToken(user._id)


        const cart = await cartServices.createCart(user)

        return res.status(200).send({ user, jwt, message: "register successfull",cart })

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

}

// user login
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userService.getUserByEmail(email)

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