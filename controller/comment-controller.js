const express= require("express");

const router = express.Router();

router.post("/comment/add", (req,res) => {
    res.send("Add New Comment")

 })
router.get("/comment/get",(req,res) =>{
    res.send("Get Comment")
});


module.exports= (function(){
    return router;
})();