import mongoose from "mongoose";

const connect_DB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongo DB connect ${conn.connection.host}`);
    } catch (error) {
        console.log(`Mongo DB connection error :- ${error} `);
    }
};

export default connect_DB;