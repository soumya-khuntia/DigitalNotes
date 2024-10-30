const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regdNo: {
        type: String,
        unique:true
    },
    phoneNo: {
        type: Number,
        // required: true,
        unique:true
    },
    dob: {
        type: Date,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    branch: {
        type: String,
        // required: true
    },
    year: {
        type: String,
        // required: true
    },
    sem: {
        type: String,
        // required: true
    }
    
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);