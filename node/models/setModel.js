var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var setModel = new Schema({

//title: {type: String}
	_id: {type: Number},
	
	movies:[{ 
				title: {type: String},
				link:  {type: String},
				genre: {type: String},
				odd: {type: Boolean}
	}]

}, { collection: 'set' });


module.exports = mongoose.model('Set', setModel);



/*

{ _id: 4, 
		movies:[{title:'Born Invincible', link:'http://ia.media-imdb.com/images/M/MV5BMTc0NjM3ODE0NV5BMl5BanBnXkFtZTYwOTI1NDA5._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Ninja Kung Fu Emperor', link:'http://ia.media-imdb.com/images/M/MV5BMTc4NDc4NjI2Ml5BMl5BanBnXkFtZTcwNDk0MDkxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Shao Lin yu Wu Dang', link:'http://ia.media-imdb.com/images/M/MV5BNzgyNjI2NTk5N15BMl5BanBnXkFtZTcwNzkwMzcxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Hollywood High Part II', link:'http://ia.media-imdb.com/images/M/MV5BMTkyMDY0MzgxMF5BMl5BanBnXkFtZTcwODg5MTk2MQ@@._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	}


*/