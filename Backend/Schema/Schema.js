
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dataSchema = new Schema({
    Name: {
        type: String,
        required: true,

    },
    Area: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    }


}, { timestamps: true })



const landData = mongoose.model('land', dataSchema);


module.exports = landData;
