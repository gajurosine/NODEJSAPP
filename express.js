var express = require('express')
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))


app.get('/' , function(req,res){
 res.sendFile(__dirname + '/Home.html')
})

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.put('/add-data',function(req,res){
    res.send('add request')
})

app.delete('/delete-data',function(req,res){
    res.send('delete request');
})

var Server = app.listen(8080 ,function(req,res){
    console.log('Server is runnig at port :8080');
})
