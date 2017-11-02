var path = require('path');
var data = require('../data/friends.js');

module.exports = function(app) {
	app.get("/api/friends", function(request, response){
		return response.json(data);
	});

	app.post("/api/friends", function(request, response){
	  response.sendFile(path.join(__dirname, "survey.html"));
	});
}