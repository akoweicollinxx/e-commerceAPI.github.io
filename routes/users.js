const express = require("express")
const router = express.Router()

const userData = [
    {
        address: {
            street: "Horsfall street",
            city: "london",
            Country: "England",
            zipcode: "25 7654", 
        } 
    },
]

router.get("/users",(req, res) => {
    res.send("userData")
})


module.exports = router