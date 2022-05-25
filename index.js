const express = require('express')
const app = express();
app.use(express.json());
const {sequelize} = require("./config/connection.js")
let bodyParser = require("body-parser");
const {catalog, product} = require("./routes/index")

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

app.use(catalog);
app.use(product)
