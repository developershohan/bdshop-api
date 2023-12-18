import express from 'express'
import { mongooseConnection } from './config/db.js'
import userRoutes from "./routers/user.route.js";
import authRoutes from "./routers/auth.route.js"
import dotenv from "dotenv"

const app = express()

dotenv.config();
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


app.use("/auth", authRoutes)
app.use("/api/users",userRoutes)
app.listen(PORT, ()=>{
     mongooseConnection()
    console.log(`server listening on ${PORT}`)
})