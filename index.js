var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'jade');
app.set('views', __dirname + '/frontend/templates/basic');
app.use(express.static('dist'));
app.get("/backend/:controller/", function(req, res){
	var controller;
	//var pathArray=req.path.split('/');
	try{

		controller=require('./backend/'+req.params.controller+'.controller.js');
		controller.read(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
	
}).get('*', function(req, res){

console.log(req.path);
res.render('template');

});
app.route("/backend/*").post(

	function(req, res){
		
		
		var controller;
	var pathArray=req.path.split('/');
	try{

		controller=require('./backend/'+pathArray[2]+'.controller.js');
		controller.add(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
		
		
	}

);

var server=app.listen(3000, function(){

console.log('server started');

});
