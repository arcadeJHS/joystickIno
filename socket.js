var socket = socket || (function sockket() {
    var http = require('http'),
        config = require('./config'),
        ipaddress = process.env.OPENSHIFT_NODEJS_IP || config.address,
        port = process.env.OPENSHIFT_NODEJS_PORT || config.port,
        WebSocketServer = require('websocket').server,
        global_counter = 0,
        all_active_connections = {};


    return {
        init: function init() {
            var server = http.createServer().listen(port, ipaddress);

            new WebSocketServer({httpServer: server})
                .on('request', function(request) {
                    var connection = request.accept(null, request.origin);

                    var id = global_counter++;
                    all_active_connections[id] = connection;
                    connection.id = id; 
                    
                    connection
                        .on('message', function(message) {
                            for (var connection in all_active_connections) {
                                all_active_connections[connection].send(message.utf8Data);
                            }
                        })
                        .on('close', function(reasonCode, description) {
                            delete all_active_connections[connection.id];
                        });
                });

            console.log("JoystickIno server is listening on: ws://" + ipaddress + ":" + port);
        }
    };
}());


module.exports.socket = socket;