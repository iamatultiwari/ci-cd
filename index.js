import dotenv from "dotenv"
dotenv.config();
import express from "express";
const app = express();

const port = process.env.port;

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