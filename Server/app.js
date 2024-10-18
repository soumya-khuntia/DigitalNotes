const mongoose = require('mongoose');
const express = require('express')
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/digitalnotes";

main()
  .then(() => {
    console.log("Connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}



app.get("/", (req,res)=>{
    res.send("Welcome");
})

app.listen(8080, () => {
    console.log("sever is lisening on port 8080");
  });