

// export const userController= async(req, res) => {
//     res.send('Hello World');
// }

// import files
import { getAlluser, getUserProfileByToken } from "../services/user.service.js";

// get user profile
const getUserProfile = async(req, res) => {

    
    try {
        const jwt = req.headers.authorization?.split(" ")[1]

        if (!jwt) {
            return res.status(404).send({error:"token not found"})
        }
        const user = await getUserProfileByToken(jwt)

        res.status(200).send(user)
        
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

// get all users
const getAllUsers = async (req, res) => {
    try {

        const users = await getAlluser()
        res.status(200).send(users)
        
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

export { getUserProfile, getAllUsers }