const express = require("express")
const router = express.Router()


const postData = [
    {
        userId: 1,
        id: 1,
        title: "Fekomi",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 2,
        id: 2,
        title: "Fekomi feks",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 3,
        id: 3,
        title: "Feko",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 4,
        id: 4,
        title: "Fekomi mmmmm",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 5,
        id: 5,
        title: "Fekomi herb",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 6,
        id: 6,
        title: "Fekomi vanesa",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 7,
        id: 7,
        title: "Fekomi nini",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 8,
        id: 8,
        title: "Feko rappp",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 9,
        id: 9,
        title: "Fekomi united",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
    {
        userId: 10,
        id: 10,
        title: "Fekomi woman",
        body: "the lshhd from fekomi herbal center in lagos nigeria, africa"
    },
]

router.get("/posts",(req,res)=>{
    res.send(postData)
})


module.exports = router