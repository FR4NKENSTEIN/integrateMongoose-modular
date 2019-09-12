
// CONFIGURATION
const express = require("express");
const bp = require("body-parser");
const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

// ROUTES
require('./routes')(app);// access routes

// PORT
app.listen(8000, (err)=>{
    console.log("listening on port 8000")
});