import dotenv from "dotenv"
dotenv.config();
import express from "express";
const app = express();

const port = process.env.port;
import sum from "./sum.js";

app.get("/",(req,res) => {
    res.send("hello their")
});


app.listen(port,() => {
    console.log(`the server is running on port ${port}`)
})


app.get("/home", async (req,res)  => {
    res.json({
        msg:"i am root"
    });
})


app.get("/getsum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    ans: sum(parseInt(a), parseInt(b))
  });
});