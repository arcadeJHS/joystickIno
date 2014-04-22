(function() {
    // INIT
    var canvas = document.querySelector("#canvas"),
        ctx = canvas.getContext('2d'),
        x = 180, 
        y = 400,
        fire = false,
        bX = 0,
        bY = 0,
        speed = 20,
        squareW = 40,
        labelX = document.querySelector("#x"),
        labelY = document.querySelector("#y");
    canvas.width = 400;
    canvas.height = 500;

    // UPDATE
    function buttonHandler(button) {
        var command = button.command,
            type = button.type;

        switch (true) {
            case command == "up" && type == "down":
                y = (y <= 0) ? 0 : y - speed;
                break;
            case command == "bottom" && type == "down":
                y = (y + squareW >= canvas.height) ? canvas.height - squareW : y + speed;
                break;
            case command == "left" && type == "down":
                x = (x <= 0) ? 0 : x - speed;
                break;
            case command == "right" && type == "down":
                x = (x + squareW >= canvas.width) ? canvas.width - squareW : x + speed;
                break;
            case command == "fire" && type == "down":
                bX = x; bY = y;
                break;
        };
    }

    // RENDER
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

        // labels
        labelX.textContent = x;
        labelY.textContent = y;

        setTimeout(loop, 1000/60);
    }());


    // init joystick
    // ==================================
    JYI.config({
        inputHandler: buttonHandler,
        wsAddress: "ws://localhost:8000"
    });


}());