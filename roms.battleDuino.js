// websocket
var ws = new WebSocket(config.wsAddress);

ws.onopen = function() {
    // draw on canvas
    var canvas = document.querySelector("#canvas"),
        ctx = canvas.getContext('2d'),
        x = 0, 
        y = 0,
        fire = false,
        bX = 0,
        bY = 0;
    canvas.width = 400;
    canvas.height = 500;

    // renderer
    (function loop() {
        // clear canvas
        ctx.fillStyle = "#eee";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // player
        ctx.fillStyle = "#00979C";
        ctx.fillRect(x, y, 40, 40);

        // bullet
        if (bY > 0) {
            ctx.fillStyle = "#fc0";
            ctx.fillRect(bX+15, bY, 10, 10);
            bY -= 10;
        }

        setTimeout(loop, 1000/60);
    })();

    ws.addEventListener('message', function(e) {
        var data = JSON.parse(e.data);

        document.querySelector("#x").textContent = data.x;
        document.querySelector("#y").textContent = data.y;

        x = data.x;
        y = data.y;
        
        if (data.fire) {
            bX = x;
            bY = y;
        }
    });
};