
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";

export const connectDB= async ()=> {
    try {
      
       await mongoose.connect(process.env.MONGO_URL);
              console.log("mongo db connected")

    }
    catch(error)
    {
        console.error("mongo db connection failed",error);
        process.exit(1);
    }
}