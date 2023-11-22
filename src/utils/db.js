import mongoose from "mongoose";

const Connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected Successfully');
    } catch (error) {
        // console.log('Error while connecting database', error.message);
        throw new Error(" db connection failed")
    }

}
export default Connection;