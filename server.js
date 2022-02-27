const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/', function(req,res){
        res.send("please visit http://178.128.156.209:3000/say?keyword=Helloworld for AWS function response");
});

app.get('/say', function(req,res) {
        resp = req.query.keyword;
        axios.get('https://tjuh18kl40.execute-api.us-east-1.amazonaws.com/default/myfunction?keyword='+req.query.keyword)
        .then(response =>{
                res.statusCode = 200;
                console.log(req.query.keyword)
                res.send(response.data);
        })
        .catch(err=>{
                res.statusCode = 400;
                console.log(res.statusCode)
                res.send(err);
        });
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});
