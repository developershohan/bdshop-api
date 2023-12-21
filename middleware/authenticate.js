import { getUserIdFromToken } from "../config/jwtProvider"
import { findUserById } from "../services/user.service"



const authenticate = async (req, res, next) => {
    try {
        

        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(404).send({
                error: 'No token provided'
            })
            
        }

        const userId = getUserIdFromToken(token)
        const user =  findUserById(userId)
        req.user = user

        // const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // req.user = decoded
        // next()

    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
    next()
}