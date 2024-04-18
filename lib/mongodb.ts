import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log('Conectado ao MongoDB')
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB()