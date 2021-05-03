const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dataSchema = new Schema({
    Email: {
        type: String,
        required: true,

    },
    Password: {
        type: String,
        required: true,
    },
}, { timestamps: true })




dataSchema.statics.login = async function (Email, Password) {
    const user = await this.findOne({ Email: Email });
    if (user) {
       console.log( `${Password} and ${user.Password}`);
        if (Password === user.Password) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};


const loginData = mongoose.model('login', dataSchema);


module.exports = loginData;