var express = requires('express');
var app = express();
var cors = requires('cors');
app.use(express.json);
app.use(express.urlencoded());

const http = require("http").Server(app);
const PORT = 3000;

app.use(cors());
app.use(function(req,res, next){
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
})
app.listen(3000);