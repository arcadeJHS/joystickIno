/**********************************************
    http server
**********************************************/
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
    port = process.env.OPENSHIFT_NODEJS_PORT || 8000,
    http = require('http'),
    fs = require('fs'),
    path = require('path');


var server = http.createServer(function(request, response) {
    // routing minimale
    var filePath = '.' + request.url;

    // hack: activate angularjs client routing...
    if (filePath == './' || !path.extname(filePath)) { 
        filePath = './index.html';
    }
    
    var extension = path.extname(filePath),
        contentType = 'text/html';
    
    switch (extension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.exists(filePath, function(exists) {
        if (exists) {
            fs.readFile(filePath, function(err, data) {
                if (err) {
                    response.writeHead(500);
                    return response.end('Error loading ' + filePath + '.html');
                }
                response.writeHead(200, {'Content-Type': contentType });
                response.end(data, 'utf-8');
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });
}).listen(port, ipaddress, function() {
    console.log((new Date()) + " Server is listening on: " + ipaddress + ":" + port);
});


/**********************************************
    websocket - server
**********************************************/
// https://github.com/Worlize/WebSocket-Node
var WebSocketServer = require('websocket').server;

var global_counter = 0,
    all_active_connections = {};

var wsServer = new WebSocketServer({ httpServer: server });

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    
    // collezione delle connessioni aperte
    var id = global_counter++;
    all_active_connections[id] = connection;
    connection.id = id; 
    
    // dati inviati dal client
    connection.on('message', function(message) {
        services.broadcastCurrentState(message.utf8Data);
    });

    // chiusura della connessione
    connection.on('close', function(reasonCode, description) {
        delete all_active_connections[connection.id];
    });

    // update data on client first connection
    services.sendCurrentState.call(connection);
});


var services = {
    sendCurrentState: function() {
        var connection = this;
        connection.send(JSON.stringify(data));
    },
    broadcastCurrentState: function(button) {
    	switch (button) {
    		case "UP":
    			data.y = (data.y <= 0) ? 0 : data.y-speed;
    			break;
    		case "BOTTOM":
    			data.y = (data.y+squareH >= canvasH) ? canvasH-squareH : data.y+speed;
    			break;
    		case "LEFT":
    			data.x = (data.x <= 0) ? 0 : data.x-speed;
    			break;
    		case "RIGHT":
    			data.x = (data.x+squareW >= canvasW) ? canvasW-squareW : data.x+speed;
    			break;
    		case "FIRE":
    			data.fire = true;
    			break;
    	}

        for (var connection in all_active_connections) {
            all_active_connections[connection].send(JSON.stringify(data));
        }

        // reset
        data.fire = false;
    }
};


/**********************************************
    data
**********************************************/
var data = {x: 180, y: 400, fire: false},
    speed = 20,
    squareW = squareH = 40,
    canvasW = 400,
    canvasH = 500;