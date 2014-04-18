/**********************************************
    websocket - server
**********************************************/
var server = require('./server').server,
    config = require('./config');


// https://github.com/Worlize/WebSocket-Node
var WebSocketServer = require('websocket').server;

var global_counter = 0,
    all_active_connections = {};

new WebSocketServer({httpServer: server})
    .on('request', function(request) {
        var connection = request.accept(null, request.origin);

        // connected clients
        var id = global_counter++;
        all_active_connections[id] = connection;
        connection.id = id; 
        
        connection
            .on('message', function(message) {
                services.broadcastCurrentState(message.utf8Data);
            })
            .on('close', function(reasonCode, description) {
                delete all_active_connections[connection.id];
            });

        // sync data on client connection
        services.sendCurrentState.call(connection);
    });


// default loaded rom
var roms = require('./roms').roms,
    game = roms[config.defaultRom]();


var services = {
    sendCurrentState: function() {
        var connection = this;
        connection.send(JSON.stringify(game.data));
    },
    broadcastCurrentState: function(button) {
    	button = JSON.parse(button);
        game[button.command][button.type]();
        for (var connection in all_active_connections) {
            all_active_connections[connection].send(JSON.stringify(game.data));
        }
    }
};