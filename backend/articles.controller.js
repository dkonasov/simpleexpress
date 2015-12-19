exports.read=function(req, res){
	
	
	var Article=require('./models/article.js');
	if(!req.params.id){
	var articles;
	Article.find(function(err, result){
		
		if(err) { 
		
		res.status(500).end();
		console.error(err);
		
		} else {
			
			res.json(result);
			
			
		}
		
		
		
	});} else {
		
		
		Article.findById(req.params.id, function(err, result){
			
			if(err){
				
				console.log(err);
				res.status(500).end();
				
			} else {
				
				
				res.json(result);
				
			}
			
		});
		
	}
	
		
	
	
	
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