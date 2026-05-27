dotenv.config();

import express from "express"
import notesRoute from "../src/routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";
dotenv.config();

// const express=require("express")

const app= express();
const PORT=process.env.PORT || 5000
connectDB();

//middleware
app.use(express.json());
app.use(rateLimiter);

// app.use((req,res,next)=>{
//     console.log("we just got a new request");
//     next();

// })



app.use("/api/notes",notesRoute)


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


