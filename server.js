var WebSockerServer = require('ws').Server;
var wss = new WebSockerServer({port:8080});
console.log('running on port 8080');

wss.on('connection', function(ws){
	console.log('connected');
	ws.on('message',function(message){
		wss.clients.forEach(function each(client){
			client.send(message);
		})
	})
})