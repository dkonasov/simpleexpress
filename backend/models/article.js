var mongoose = require('mongoose');

var articleSchema=new mongoose.Schema({

	title: String,
	text: String,
	publishDate: {type: Date, default: Date.now}

});
var Article=mongoose.model('Article', articleSchema);
module.exports=Article;