var mongoose = require('mongoose');
var db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){});

mongoose.connect('mongodb://localhost/simpleexpress');
var articleSchema=new mongoose.Schema({

	title: String,
	text: String

});
var Article=mongoose.model('Article', articleSchema);
module.exports=Article;