const express = require('express')
const app = express();



app.get("/", (req,res)=>{
    res.send("Welcome");
})

app.listen(8080, () => {
    console.log("sever is lisening on port 8080");
  });