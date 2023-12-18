
import { User } from "../models/user.model";
import bcrypt from "bcrypt"
import jwtProvider from "../config/jwtProvider.js"

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
const findUserById = async (userId) => {

    try {
        const user = awaitUser.findOne(userId).populate("address");

        if (!user) {
            throw new Error('User not found by id :', userId)
        }
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

// find user by id
const findUserByEmail = async (email) => {

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

// get user profile by token
const getUserProfileByToken = async (token) => {

    try {

        const userId = jwtProvider.getUserProfileByToken

        const user = await findUserById(userId)

        if (!user) {
            throw new Error(" user not found with id:", userId)
        }
        return user

    } catch (error) {
        throw new Error(error.message)
    }
}

// get all user
const getAlluser = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error(error.message)
    }
}

export { createUser, findUserById, findUserByEmail, getUserProfileByToken, getAlluser }