const express = require('express');
const app = express();


const connectedDB = require('./db');

require("dotenv").config();


connectedDB();

app.get('/', (req,res)=>{

    return res.json({"Hi":"anish"})

})



const PORT = process.env.PORT || 3002;
app.listen(PORT , () => {
    console.log(`Hello,  Listening on PORT ${PORT} `)
} )