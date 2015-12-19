var Article=require('./backend/models/article.js');
console.log(Article);
var newArticle=new Article({

	title : 'First article',
	text : 'First article text'

});

newArticle.save(function(err, article){

if(err) return console.error(err);
console.log(article);

});
