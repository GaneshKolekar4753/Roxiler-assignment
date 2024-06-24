const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/",(req,res)=>{
    res.send("welcome to the new project")
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error, server is not up", err);
  }
  console.log(`server is up on port:${port}`);
});
