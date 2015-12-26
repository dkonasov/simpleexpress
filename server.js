var express=require('express');
var mongoose = require('mongoose');
var bodyParser=require('body-parser');
var start=function(){
var db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	
	var app=express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/frontend/templates/basic');
	app.use(express.static('dist'));
	var router=require('./server_modules/router');
	router.start(app);
	var server=app.listen(3000, function(){
		
		console.log('Simpleexpress server started');

	});
	
});

mongoose.connect('mongodb://localhost/simpleexpress');

}
exports.start=start;