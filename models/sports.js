const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sportSchema = new Schema({
    name: { type: String },
    description: { type: String },
    date: { type: Date },
    location: { type: String },
    // LFM = looking for more aka need
    lfm: { type: Boolean },
    lfmNumber: { type: Number }
}, { timestamps: true })

const Sports = mongoose.model("Sport", sportSchema)
module.exports = Sports