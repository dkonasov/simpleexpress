exports.index=function(req, res){
	
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