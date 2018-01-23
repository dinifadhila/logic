const express= require("express");

const router = express.Router();

router.post("/post/add", (req,res) => {
    res.send("Add New Post")
    
 })
router.post("/post/upload", (req,res) => {

    if (!req.files)
        return res.status(400).send( "No files were uploded.");
    
    let image = req.files.gambar;

    image.mv("./public/image.png",function (err){
        if (err)
            return res.status(500).send(err);
        
             res.send("File Upload")
        
    })

 })
router.get("/post/get",(req,res) =>{
     res.send("Get Post")
 })



module.exports= (function(){
    return router;
})();