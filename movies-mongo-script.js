// 1) Switch to the 'demo' database
db = db.getSiblingDB('moviequiz')

// 2) Enter these documents into the collection 'set'
db.set.save(
	{ _id: 1, 
		movies:[{title:'Car Crash', link:'http://ia.media-imdb.com/images/M/MV5BMjA2MTgyNTg0N15BMl5BanBnXkFtZTYwMDA2MzM5._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'The Eight Escorts', link:'http://ia.media-imdb.com/images/M/MV5BMTkzMTM3MDgxN15BMl5BanBnXkFtZTcwOTkzODEyMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Fo zhang luo han quan', link:'http://ia.media-imdb.com/images/M/MV5BNzcwMDIxODUzNV5BMl5BanBnXkFtZTYwODE1MjE5._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Hardly Working', link:'http://ia.media-imdb.com/images/M/MV5BMjExNDU3OTE2Nl5BMl5BanBnXkFtZTcwODgyMTgyMQ@@._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})

db.set.save(
	{ _id: 2, 
		movies:[{title:'The Magnificent', link:'http://ia.media-imdb.com/images/M/MV5BMTU4ODM4MzI5Nl5BMl5BanBnXkFtZTcwNjk2MzkyMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Ninja Champion', link:'http://ia.media-imdb.com/images/M/MV5BMjAyODI2NzkzN15BMl5BanBnXkFtZTcwNzA4ODU1NQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'The Rebel Intruders', link:'http://ia.media-imdb.com/images/M/MV5BMTY2MzE0OTA0NF5BMl5BanBnXkFtZTcwMTk1NTEzMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Harry's War', link:'http://ia.media-imdb.com/images/M/MV5BNTcxMzYzMDgyN15BMl5BanBnXkFtZTYwMjE2Mjg5._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})

db.set.save(
	{ _id: 3, 
		movies:[{title:'Jung-ri's School of Yong-hyung-ma', link:'http://ia.media-imdb.com/images/M/MV5BMTY2NTQ3NDY2Ml5BMl5BanBnXkFtZTcwODk2NTIyMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Lover and Sword', link:'http://ia.media-imdb.com/images/M/MV5BMjE2MjkwNTcwN15BMl5BanBnXkFtZTcwNzIyODYxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Yong zheng yu nian geng yao', link:'http://ia.media-imdb.com/images/M/MV5BMjA2Nzg2ODg4NF5BMl5BanBnXkFtZTcwNDEwODUyMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Hollywood High Part II', link:'http://ia.media-imdb.com/images/M/MV5BMTkyMDY0MzgxMF5BMl5BanBnXkFtZTcwODg5MTk2MQ@@._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})


db.set.save(
	{ _id: 4, 
		movies:[{title:'Born Invincible', link:'http://ia.media-imdb.com/images/M/MV5BMTc0NjM3ODE0NV5BMl5BanBnXkFtZTYwOTI1NDA5._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Ninja Kung Fu Emperor', link:'http://ia.media-imdb.com/images/M/MV5BMTc4NDc4NjI2Ml5BMl5BanBnXkFtZTcwNDk0MDkxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Shao Lin yu Wu Dang', link:'http://ia.media-imdb.com/images/M/MV5BNzgyNjI2NTk5N15BMl5BanBnXkFtZTcwNzkwMzcxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Hollywood High Part II', link:'http://ia.media-imdb.com/images/M/MV5BMTkyMDY0MzgxMF5BMl5BanBnXkFtZTcwODg5MTk2MQ@@._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})

db.set.save(
	{ _id: 5, 
		movies:[{title:'The True Game of Death', link:'http://ia.media-imdb.com/images/M/MV5BMTI3MDYxNDkzMF5BMl5BanBnXkFtZTcwOTg5MjkxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'24 Hours to Midnight', link:'http://ia.media-imdb.com/images/M/MV5BMTQzMTYwODU1OV5BMl5BanBnXkFtZTcwMjUyNzcxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Alley Cat', link:'http://ia.media-imdb.com/images/M/MV5BMzQxNjMyODU5OV5BMl5BanBnXkFtZTcwNTUxMDcxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Improper Channels', link:'http://ia.media-imdb.com/images/M/MV5BMTc5NDQ2NTA5Nl5BMl5BanBnXkFtZTYwNDE2Mjg5._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})

db.set.save(
	{ _id: 6, 
		movies:[{title:'Eagle Claw vs. Butterfly Palm', link:'http://ia.media-imdb.com/images/M/MV5BMTg5OTkyMjI5MV5BMl5BanBnXkFtZTcwMTQyMDUxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'The Rebel Intruders', link:'http://ia.media-imdb.com/images/M/MV5BMTY2MzE0OTA0NF5BMl5BanBnXkFtZTcwMTk1NTEzMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Alley Cat', link:'http://ia.media-imdb.com/images/M/MV5BMzQxNjMyODU5OV5BMl5BanBnXkFtZTcwNTUxMDcxMQ@@._V1_SX300.jpg', genre: 'Action', odd: false },
		        {title:'Improper Channels', link:'http://ia.media-imdb.com/images/M/MV5BMTc5NDQ2NTA5Nl5BMl5BanBnXkFtZTYwNDE2Mjg5._V1_SX300.jpg', genre: 'Comedy', odd: true }
		        ]
	})

db.set.find({"movies.odd":true});

// $elemMatch allows you to query on multiple conditions within an array
db.set.find( { movies: { $elemMatch: { odd: true, title:'Hardly Working' } } } )

// Return only the first matching movie. i.e. the odd movie
db.set.find({"movies.odd":true}, {_id:0, "movies.$":1})
