const path = require('path');
const express = require('express');
const userRoute=require("./routes/user");
const cookieParser=require("cookie-parser");


const mongoose=require("mongoose");
mongoose
        .connect("mongodb://localhost:27017/blogify")
        .then(e => console.log("monogodb connected"));



const app = express();
const PORT=8001;

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.urlencoded({extended:false}));
app.user(cookieParser);
app.use('check')

app.get("/",(req,res)=>{
    res.render('home');
})
app.use("/user",userRoute);

app.listen(PORT,()=>console.log("server started at PORT "+PORT));
