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

exports.delete=function(req, res){
	
	
	if(req.params.id){
		
		var Article=require('./models/article.js');
		Article.findByIdAndRemove(req.params.id, function(){
			
			res.status(200).end();
			
		});
		
	
	} else {
		
		console.log("trying to delete article without id!");
		res.status(500).end();
		
	}
	
}

exports.update=function(req, res){
	
	if(req.params.id){
		
		var Article=require('./models/article.js');
		delete req.body.article._id;
		Article.findByIdAndUpdate(req.params.id, req.body.article, function(err, result){
			
			
			if(!err){
				
				res.status(200).end();
				
			} else {
				
				console.log(err);
				res.status(500).end();
				
			}
			
			
		});
		
	}else{
		
		console.log("trying to modify article without id!");
		res.status(500).end();
		
	}
	
}