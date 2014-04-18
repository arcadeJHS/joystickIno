/**********************************************
    http server
**********************************************/
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    config = require('./config'),
    ipaddress = process.env.OPENSHIFT_NODEJS_IP || config.address,
    port = process.env.OPENSHIFT_NODEJS_PORT || config.port;


var server = http.createServer(function(request, response) {
    // minimal routing
    var filePath = '.' + request.url;

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
})
.listen(port, ipaddress, function() {
    console.log((new Date()) + " Server is listening on: " + ipaddress + ":" + port);
});


module.exports.server = server;