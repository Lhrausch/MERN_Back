const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express

app.use(express.json())
app.use(cors())

const sportsController = require("./controllers/sports")
appp.use("/sports", sportsController)

app.listen(3000, () => {
    console.log("Listening...");
})

mongoose.connect("mongodb://localhost:27017/sport", () => {
    console.log("Connected to Mongod");
})
