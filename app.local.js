const express = require('express')
const app = express();
const port = 3000;

const route = require('./routes/index');

app.use("/", route);

app.listen("3000", function(){
    console.log("server started !");
})