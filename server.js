var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile('ui/index.html' , { root : __dirname});
});

app.get('/ui/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styles.css'));
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile('/js/jquery.js' , { root : __dirname});
});

app.get('/js/slider.js', function (req, res) {
  res.sendFile('/js/slider.js' , { root : __dirname});
});

app.get('/js/superfish.js', function (req, res) {
  res.sendFile('/js/superfish.js' , { root : __dirname});
});

app.get('/js/custom.js', function (req, res) {
  res.sendFile('/js/custom.js' , { root : __dirname});
});

//sending 6 image files

app.get('/images/windows10.jpg', function (req, res) {
  res.sendFile('/images/windows10.jpg' , { root : __dirname});
});

app.get('/images/osx.png', function (req, res) {
  res.sendFile('/images/osx.png' , { root : __dirname});
});


app.get('/images/ubuntu.jpg', function (req, res) {
  res.sendFile('/images/ubuntu.jpg' , { root : __dirname});
});


app.get('/images/semi-transparent.png', function (req, res) {
  res.sendFile('/images/semi-transparent.png' , { root : __dirname});
});


app.get('/images/slide-prev.gif', function (req, res) {
  res.sendFile('/images/slide-prev.gif' , { root : __dirname});
});

app.get('/images/slide-next.gif', function (req, res) {
  res.sendFile('/images/slide-next.gif' , { root : __dirname});
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
