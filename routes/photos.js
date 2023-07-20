const express = require("express")
const router = express.Router()

router.get("/photos",(req,res)=>{
    res.send("picture")
})


module.exports = router