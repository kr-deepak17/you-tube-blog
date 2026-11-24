const {Router}=require("express");
const path = require("path")

const multer=require("multer");

const router=Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, path.resolve(__dirname, "../public/images/uploads/"));
  },
  filename: function (req, file, cb) {
    const fileName=`${Date.now()}-${file.originalname}`
    cb(null,fileName)  
  },
});

const upload=multer({storage:storage});



router.get("/add-new",(req,res)=>{
    return res.render('addBlog',{
        user:req.user,
    });
});


router.post("/",upload.single('coverImage'),(req,res)=>{
   console.log(req.body);
   return res.redirect("/")
});




module.exports=router;