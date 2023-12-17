import express from 'express'
import { mongooseConnection } from './config/db.js'
import userRoute from "./routers/userRoute.js";

const app = express()

const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


app.use(userRoute)
app.listen(PORT, ()=>{
     mongooseConnection()
    console.log(`server listening on ${PORT}`)
})