module.exports = function Index(app, server) {
	var io = require("socket.io").listen(server);

	app.get('/', function(req, res) {
		res.render("index");
	});



	io.sockets.on('connection', function(socket) {
		socket.on('submit_message', function(data) {
			console.log(data);
			io.emit('new_message', data);
		})

	});

}