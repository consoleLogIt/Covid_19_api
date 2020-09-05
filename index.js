const express = require('express');
const app  = express();
const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-strategy');
const port  = 8000;

app.use(express.urlencoded());
app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`);
        return;
    }
    console.log(`server is running at port number : ${port}`);


});