var express = require("express");
var nunjucks  = require('nunjucks');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

var twitterRoute = require("./route/twitterRoute");

nunjucks.configure('./view/', {
  autoescape: true,
  express   : app
});

app.engine( 'html', nunjucks.render );
app.set( 'view engine', 'html' );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/static',express.static('public'))
app.use('/twitter',twitterRoute);



var server = app.listen(8080,function(){
	console.log("Sever started at port 8080");
})