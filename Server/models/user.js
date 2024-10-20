const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    regdNo: {
        type: String,
        required: true,
        unique:true
    },
    phno: {
        type: Number,
        required: true,
        unique:true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    sem: {
        type: String,
        required: true
    }
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);