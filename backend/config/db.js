import mongoose from "mongoose";
import  {ENV_VARS} from './envVars.js';


export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URI)
        console.log("Mongo connected: "+ conn.connection.host);
    } catch (error) {

        console.error("Error connecting to mangoDB"+ error.message);
        process.exit(1);
        
    }
}
