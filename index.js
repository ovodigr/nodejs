const express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){

console.log(__dirname + '/index.html');
  res.sendFile(__dirname + '/index.html');
  // res.send('home page');
});

app.get('/news', function(req, res){

  // res.render('news', {newsId: req.params.id});
  res.sendFile(__dirname + '/news.html');
  // res.send('news page');
});

app.get('/news/:id', function(req, res){
    var obj = {title: "Новини", numbers: [1,32,43,12,0]};

    res.render('news', {newsId: req.params.id, obj: obj});
});

app.listen(3000);
