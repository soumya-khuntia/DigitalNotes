// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema({
//   googleId: {
//     type: String,
//     unique: true,
//     sparse: true,
//   },
//   username: {
//     type: String,
//     // required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: true,
//     sparse: true,
//   },
//   regdNo: {
//     type: String,
//     unique: true,
//     sparse: true,
//     default: null,
//   },
//   phoneNo: {
//     type: Number,
//     unique: true,
//     sparse: true,
//     default: "",
//   },
//   dob: {
//     type: Date,
//     default: null,
//   },
//   gender: {
//     type: String,
//     default: "",
//   },
//   branch: {
//     type: String,
//     default: "",
//   },
//   year: {
//     type: String,
//     default: "",
//   },
//   sem: {
//     type: String,
//     default: "",
//   },
// });
// userSchema.plugin(passportLocalMongoose, {
//   usernameField: "email",
// });

// userSchema.pre("save", async function (next) {
//   if (!this.regdNo) {
//     this.regdNo = await generateUniqueRegdNo();
//   }
//   if (!this.phoneNo) {
//     this.phoneNo = await generateUniquePhoneNo();
//   }
//   next();
// });
// async function generateUniqueRegdNo() {
//   let uniqueValue;
//   let isUnique = false;
//   while (!isUnique) {
//     uniqueValue = "unique_" + Math.random().toString(36).substr(2, 9); // Example: Generate a unique value
//     const existingUser = await mongoose
//       .model("User")
//       .findOne({ regdNo: uniqueValue,phoneNo: uniqueValue });
//     if (!existingUser) {
//       isUnique = true;
//     }
//   }
//   return uniqueValue;
// }

// module.exports = mongoose.model("User", userSchema);

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
    unique: true,
    sparse: true,
    default: "",
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

// userSchema.pre("save", async function (next) {
//   if (!this.regdNo) {
//     this.regdNo = await generateUniqueRegdNo();
//   }
//   if (!this.phoneNo) {
//     this.phoneNo = await generateUniquePhoneNo();
//   }
//   next();
// });

// async function generateUniqueRegdNo() {
//   let uniqueValue;
//   let isUnique = false;
//   while (!isUnique) {
//     uniqueValue = "unique_" + Math.random().toString(36).substr(2, 9); // Example: Generate a unique value
//     const existingUser = await mongoose.model("User").findOne({ regdNo: uniqueValue });
//     if (!existingUser) {
//       isUnique = true;
//     }
//   }
//   return uniqueValue;
// }

// async function generateUniquePhoneNo() {
//   let uniqueValue;
//   let isUnique = false;
//   while (!isUnique) {
//     uniqueValue = Math.floor(1000000000 + Math.random() * 9000000000); // Generate a 10-digit unique phone number
//     const existingUser = await mongoose.model("User").findOne({ phoneNo: uniqueValue });
//     if (!existingUser) {
//       isUnique = true;
//     }
//   }
//   return uniqueValue;
// }

module.exports = mongoose.model("User", userSchema);
