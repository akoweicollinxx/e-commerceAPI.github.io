const express = require("express")
const router = express.Router()


const cartData = [
    {
        _id: 1,
        userId: 1,
        products: [
          { productId: 10, quantity: 2 },
          { productId: 12, quantity: 3 },
        ],
    },
    {
        _id: 2,
        userId: 2,
        products: [
          { productId: 1, quantity: 2 },
          { productId: 1, quantity: 3 },
        ],
    },
    {
        _id: 3,
        userId: 3,
        products: [
          { productId: 3, quantity: 3 },
          { productId: 3, quantity: 3 },
        ],
    },
    {
        _id: 4,
        userId: 4,
        products: [
          { productId: 4, quantity: 4 },
          { productId: 3, quantity: 4 },
        ],
    },
    {
        _id: 5,
        userId: 5,
        products: [
          { productId: 5, quantity: 5 },
          { productId: 5, quantity: 5 },
        ],
    },
    {
        _id: 6,
        userId: 6,
        products: [
          { productId: 6, quantity: 6 },
          { productId: 6, quantity: 6 },
        ],
    },
    {
        _id: 7,
        userId: 7,
        products: [
          { productId: 7, quantity: 7 },
          { productId: 7, quantity: 7 },
        ],
    },
    {
        _id: 8,
        userId: 8,
        products: [
          { productId: 8, quantity: 8 },
          { productId: 8, quantity: 8 },
        ],
    },
    {
        _id: 9,
        userId: 9,
        products: [
          { productId: 9, quantity: 9 },
          { productId: 9, quantity: 9 },
        ],
    },
    {
        _id: 10,
        userId: 10,
        products: [
          { productId: 10, quantity: 10 },
          { productId: 10, quantity: 10 },
        ],
    },
];

router.get("/cart",(req,res)=>{
    res.send(cartData);
})


module.exports = router

