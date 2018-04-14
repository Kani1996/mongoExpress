var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//connect to mongodb

mongoose.connect('mongodb://localhost:27017/contactlist');
//onConnection

mongoose.connection.on('connected',()=>{
    console.log('Connected to database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in database connection:'+err);
    }
    
});

//port number
const port = 3000;


//adding middleware -cors
app.use(cors());

//body-parser

app.use(bodyparser.json());

//static file

app.use(express.static(path.join(__dirname,'public')));

//router 

const route = require('./routes/route');

app.use('/api',route);

//testing server
app.get('/',(req, res)=>{
   res.send('sample Application');

});

app.listen(port,()=>{
console.log('Server started at port:'+port);
});