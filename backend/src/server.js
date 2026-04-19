import express from "express"
import notesRoute from "../src/routes/notesRoute.js";

// const express=require("express")

const app= express();

app.use("/api/notes",notesRoute)


app.listen(5001,()=>{
    console.log("server is running")
})

