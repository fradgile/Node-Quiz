var express = require('express'),
	mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/moviequiz')

var Set = require('C:/Users/femmett/Documents/Quiz/node/models/setModel');

var app = express();

var port = process.env.PORT || 3000;

var setRouter = express.Router();

setRouter.route('/Sets')
	.get(function(req, res){

		var query = req.query;

//		console.log('params: ' + JSON.stringify(req.params));
//		console.log('body: ' + JSON.stringify(req.body));
//		console.log('query: ' + JSON.stringify(req.query));


//		Set.find(query, function(err, sets){
	
		Set.find(function(err, sets){
			if(err){
				res.status(500).send(err);
			}else{
//				console.log('sets = ' + sets);
				res.jsonp(sets);
			}

		}); //.limit(4);		

	});

setRouter.route('/GetOddTitle')
	.get(function(req, res){

		var query = req.query;

		Set.findById(req.query.id, function(err, sets){			
			if(err){
				res.status(500).send(err);
			}else{
				console.log("sets.movies = " + sets.movies[3].title);
				var responseJson = {oddTitle: sets.movies[3].title };
				res.jsonp(responseJson);
			}

		});	


//		var responseJson = {hello: "This is my api"};
//		res.json(responseJson);
	});




app.use('/api', setRouter);

app.get('/', function(req, res){
	res.jsonp('wecome to my API!!');
	//res.send('wecome to my API!!');
});

app.listen(port, function(){
	console.log('Gulp is running my app on PORT: ' + port);
});