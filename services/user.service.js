
import { User } from "../models/user.model";
import bcrypt from "bcrypt"

//  create user service
const createUser = async (userdata) => {
    try {
        let { fname, lname, email, password } = userdata;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error('User already exists :', email)
        }

        // hash password

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            fname,
            lname,
            email,
            password
        })
        console.log(`user created`);
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

// find user by id
const findUserById = async ( userId )=>{

    try {
        const user = awaitUser.findOne(userId)

        if (!user) {
            throw new Error('User not found by id :', userId)
        }
        return user
        
    } catch (error) {
        throw new Error(error.message)
    }
}

// find user by id
const findUserByEmail = async ( email )=>{

    try {
        const user = awaitUser.findOne(email)

        if (!user) {
            throw new Error('User not found by email :', email)
        }
        return user
        
    } catch (error) {
        throw new Error(error.message)
    }
}



export {createUser, findUserById, findUserByEmail}