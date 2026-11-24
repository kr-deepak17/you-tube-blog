const path = require('path');
const express = require('express');



const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");

const Blog=require("./models/blog");


const cookieParser=require("cookie-parser");

const{checkForAuthenticationCookie,}=require("./middlewares/auth");


const mongoose=require("mongoose");
mongoose
        .connect("mongodb://localhost:27017/blogify")
        .then(e => console.log("monogodb connected"));



const app = express();
const PORT=8001;

app.set("view engine","ejs");
app.set('views',path.resolve("./views"));

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))

// app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/",async(req,res)=>{
    if (!req.user) {
        return res.redirect("/user/signin");
    }
    const allBlogs=(await Blog.find({}));
    res.render('home',{
        user:req.user,
        blogs:allBlogs,

    })

})

app.use("/user",userRoute);
app.use("/blog",blogRoute);




app.listen(PORT,()=>console.log("server started at PORT "+PORT));
