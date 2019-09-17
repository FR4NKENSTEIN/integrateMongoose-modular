// CONFIGURATION
    //IMPORTS
const express = require("express");
const app = express();// "app" is just standard naming convention

    // .set defines setting for the server
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

    // .use mounts middleware
app.use(express.urlencoded({extended:true}));

// ROUTES
require('./routes')(app);// access routes && send const "app" backwards
                        // through the chain of requirements

// PORT
app.listen(8000, (err)=>{
    console.log("listening on port 8000")
});