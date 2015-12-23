var mongoose = require('mongoose');

var articleSchema=new mongoose.Schema({

	title: {type : String, required :true},
	text: {type : String, required :true},
	publishDate: {type: Date, default: Date.now}

});
var Article=mongoose.model('Article', articleSchema);
module.exports=Article;