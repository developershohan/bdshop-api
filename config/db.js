import { mongoose } from "mongoose";


export const mongooseConnection = async()=>{

    try {
        const connection = await mongoose.connect("mongodb+srv://devshohanur:4LnYXzThVESpN6oL@cluster0.ll0bzap.mongodb.net/?retryWrites=true&w=majority");
        console.log(` Mongoose Connected `);
    } catch (error) {
        console.log(`${error}`);
    }
}
