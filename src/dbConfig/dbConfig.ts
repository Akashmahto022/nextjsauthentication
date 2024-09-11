import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB Connected")
        })

        connection.on('error', (err) => {
            console.log("Error in connected MongoDB", + err);
            process.exit()
        })

    } catch (error) {

        console.log("Something went wrong in connecting to DB");
        console.log(error);
    }
}