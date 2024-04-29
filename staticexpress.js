var express = require('express')
var app = express();

app.use(express.static(__dirname +'/image'))
console.log('Server is running ');

// var Server = app.listen(5000,function(){
//     console.log('my server is running at port :5000');
// })
var Server =app.listen(5000)