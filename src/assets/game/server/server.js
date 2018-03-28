var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var aesjs = require('aes-js');
var moment = require('moment');

var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')

var adapter = new FileSync('db.json')
var db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ scores: [] })
  .write()

var users = {};

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.get('/scoreboard/:span', function(req, res) {

	var span = req.params.span;

	switch (span) {
    case 'day':
        span = "day";
        break;
    case 'week':
        span = "week";
        break;
    case 'month':
        span = "month";
        break;
    default: 
    	span = "day";
	}
	scores = getTop(span);
	res.send({scores: scores, span: span});
});

var key_validity = 2000;
var pixel_coefficient = 0.025;

io.on('connection', function(socket){
  
  users[socket.id] = { };
  var client_ip = socket.request.connection.remoteAddress;
  users[socket.id].client_ip = client_ip;

  setInterval(function(str1, str2) {
	  var key = [];

	  for (var i = 0; i < 32; i++)
	  {
	  	key.push(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
	  }

	  users[socket.id].key = key;
	  users[socket.id].created_at = Date.now();

	  socket.emit('update key',users[socket.id]);
  }, key_validity);

  socket.on('start game', function(data) {
  	var data = decrypt(socket.id, data.data);

  	if (data && data.decoded)
  	{
  		users[socket.id].started_at = Date.now();
  		users[socket.id].achievements = [];
  		console.log("Game started!");
  	}
  	
  });

  socket.on('achievement', function(data) {
  	var data = decrypt(socket.id, data.data);

  	if (data && data.decoded)
  	{
  		var diff = 0;
  		if (users[socket.id].achievements.length > 0)
  		{
  			var last_achievment = users[socket.id].achievements[users[socket.id].achievements.length -1];
  			diff = (Date.now() - last_achievment.created_at);
  		}
  		
  		users[socket.id].achievements.push({created_at: Date.now(), distance: data.distance, diff: diff});
  	}
  });
  socket.on('finish game', function (data) {
  	var data = decrypt(socket.id, data.data);

  	if (data && data.decoded)
  	{

  		//Wait for the key validity for some more data to come in
  		setTimeout(function(){
  			var distance = data.distance;
	  		var calc_distance = Math.round(pixel_coefficient * data.distance);

	  		var expected_achievments = Math.floor(calc_distance / 100);

	  		if (expected_achievments != users[socket.id].achievements.length)
	  		{
	  			console.log("Achievments don't match!");
	  			console.log("Expected: " + expected_achievments + " Received: " + users[socket.id].achievements.length);
	  			console.log("\n\n");

	  			return;
	  		}

	  		var game_time = Date.now() - users[socket.id].started_at;

	  		var achievement_sum = 0;
	  		for (var i = 0; i < users[socket.id].achievements.length; i++)
	  		{
	  			achievement_sum += users[socket.id].achievements[i].diff;

	  			if (i == users[socket.id].achievements.length - 1)
	  			{
	  				//Our last one.  Add the last diff
	  				achievement_sum += Date.now() - users[socket.id].achievements[i].created_at;
	  			}
	  		}

	  		var game_diff = game_time - achievement_sum;

	  		if (game_diff > 15000 || game_diff < -15000)
	  		{
	  			console.log("Invalid game diff");
	  			return;
	  		}



	  		console.log("This is a valid game!");


	  		//Create a key to input the name to
	  		require('crypto').randomBytes(48, function(err, buffer) {
			  var token = buffer.toString('hex');

			  users[socket.id].token = token;
			  users[socket.id].score = calc_distance;
			  socket.emit('input telegram',{token: token});

			});

	  		

  		}, 0);
  		
  	}
  });

	socket.on('save score', function (data) {
		if (data && data.token && users[socket.id] && users[socket.id].token && data.token == users[socket.id].token)
		{
			console.log("Save their telegram: " + data.telegram + " with a score of: " + users[socket.id].score);

			db.get('scores')
			  .push({ created_at: new Date(), telegram: data.telegram, score: users[socket.id].score, user_data: users[socket.id]})
			  .write();
		}
	});
});


function getTop(type)
{
	return db.get('scores')
	  .filter(function (v) {return new moment(v.created_at) > moment().subtract(1,type)})
	  .sortBy('score')
	  .take(5)
	  .value()
	  .reverse();
}

function decrypt(socket_id, encryptedHex)
{
	if (users && users[socket_id] && Date.now() - users[socket_id].created_at < key_validity)
	{
		var key = users[socket_id].key;
		var c = users[socket_id].client_ip.match(/^\d+|\d+\b|\d+(?=\w)/g);
		var counter = c.length > 0 ? parseInt(c[0]) : 0;

		// When ready to decrypt the hex string, convert it back to bytes
		var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

		// The counter mode of operation maintains internal state, so to
		// decrypt a new instance must be instantiated.
		var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
		var decryptedBytes = aesCtr.decrypt(encryptedBytes);

		// Convert our bytes back into text
		var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
		var ret = JSON.parse(decryptedText);
		ret.decoded = true;
		return ret;
	}
	else
	{
		console.log("Key expired");
		return false;
	}
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});