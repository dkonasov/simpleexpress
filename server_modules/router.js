exports.start=function(app){
	
	app.get("/backend/:controller/", function(req, res){
	var controller;
	//var pathArray=req.path.split('/');
	try{

		controller=require('../backend/'+req.params.controller+'.controller.js');
		controller.read(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
	
}).get("/backend/:controller/:id", function(req, res){
	
	var controller;
	
	try{

		controller=require('../backend/'+req.params.controller+'.controller.js');
		controller.read(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
	
})
.delete("/backend/:controller/:id", function(req, res){
	
	
	var controller;
	
	try{

		controller=require('../backend/'+req.params.controller+'.controller.js');
		controller.delete(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
	
	
})
.post("/backend/:controller/:id", function(req, res){
	
	var controller;
	
	try{

		controller=require('../backend/'+req.params.controller+'.controller.js');
		controller.update(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
	
})
.get('*', function(req, res){

console.log(req.path);
res.render('template');

});
app.route("/backend/:controller/").post(

	function(req, res){
		
		
		var controller;
	
	try{

		controller=require('../backend/'+req.params.controller+'.controller.js');
		controller.add(req, res);
	} catch(err){

	
	console.log(err);
	res.status(404).end();

}
		
		
	}

);
	
}