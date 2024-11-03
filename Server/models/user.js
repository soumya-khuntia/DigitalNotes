const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    sparse: true,
  },
  regdNo: {
    type: String,
    unique: true,
    sparse: true,
    default: null,
  },
  phoneNo: {
    type: Number,
    // unique: true,
    sparse: true,
    default: null,
  },
  dob: {
    type: Date,
    default: null,
  },
  gender: {
    type: String,
    default: "",
  },
  branch: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  sem: {
    type: String,
    default: "",
  },
});
userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("User", userSchema);
