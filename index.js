const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3030 || process.env.PORT;

app.use('/',(req,res)=>{
    res.send('Welcome to the server')
});

app.listen(PORT,()=>{
    console.log(`Services is running at port ${PORT}`)
});