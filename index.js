const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 8000
const {readdirSync} = require("fs")

readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))



app.get('/', (req, res) => {
  res.send('Hello  Andre World!')
});


app.listen(port, () => {
  console.log(`server is running on port:${port}`)
})