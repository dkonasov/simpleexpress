exports.read=function(req, res){
	
	
	var Article=require('./models/article.js');
	var responseError;
	var articles;
	Article.find(function(err, result){
		
		if(err) { responseError=true;
		console.error(err);
		} else {
			
			articles=result;
			
		}
		
		var backendResponse={
		
		"articles" : articles,
		"greeting" : "Hello from backend!"
		
	};
	
	res.json(backendResponse);
		
	});
	
	
};

exports.add=function(req, res){
	
	var backendResponse={};
	var Article=require('./models/article.js');
	var article=new Article(req.body);
	article.save(function(err){
		
		if(!err){
			
			backendResponse.saved=true;
			res.json(backendResponse)
			
		} else {
			
			backendResponse.saved=false;
			console.log(err);
			res.json(backendResponse);
			
		}
		
	});
	
	
};