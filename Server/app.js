const mongoose = require('mongoose');
const express = require('express')
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/digitalnotes";
const noteRouter = require("./routes/digitalNote-route");
const cors = require("cors");
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

app.use(cors());
app.use(express.json());
app.use('/api/notes', noteRouter);

app.get("/", (req,res)=>{
    res.send("Welcome");
})

app.listen(8080, () => {
    console.log("sever is lisening on port 8080");
  });