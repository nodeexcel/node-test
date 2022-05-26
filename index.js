const express = require('express')
const app = express();
app.use(express.json());
require('dotenv').config();
let bodyParser = require("body-parser");
const {catalog, product} = require("./routes/index")

app.use(catalog);
app.use(product);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})

