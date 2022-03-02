require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const db = mongoose.connection;
const PROJECT3_DB = process.env.PROJECT3_DB
const PORT = process.env.PORT || 3003;

app.use(express.json())
app.use(cors())

// Connect to Mongo
mongoose.connect(PROJECT3_DB, { useNewUrlParser: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

const sportsController = require("./controllers/sports")
app.use("/sports", sportsController)

app.listen(PORT || 3000, () => {
    console.log("Listening...");
})

