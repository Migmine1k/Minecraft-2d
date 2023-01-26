
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 100;
blockImageHeight = 100;

var playerObject = "";
var blockImageObject = "";

backgroundImage = "jogador.png";

function playerUpdate() {
    fabric.Image.fromURL("jogador.png", function (Img) {
        playerObject = Img;

        playerObject.scaleToWidth(200);
        playerObject.scaleToHeight(200);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);

    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);

    });

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m e shift pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if (keyPressed == '38') {
        up();
    }
    if (keyPressed == '40') {
        down();
    }
    if (keyPressed == '37') {
        left();
    }
    if (keyPressed == '39') {
        right();
    }
    if (keyPressed == '48') {
        newImage('cloud.jpg');
    }
    if (keyPressed == '49') {
        newImage('dark_green.png');
    }
    if (keyPressed == '50') {
        newImage('ground.png');
    }
    if (keyPressed == '51') {
        newImage('light_green.png');
    }
    if (keyPressed == '52') {
        newImage('roof.png');
    }
    if (keyPressed == '53') {
        newImage('trunk.jpg');
    }
    if (keyPressed == '54') {
        newImage('unique.png');
    }
    if (keyPressed == '55') {
        newImage('wall.jpg');
    }
    if (keyPressed == '56') {
        newImage('yellow_wall.jpg');
    }

}
function up() {
    if (playerY >= 0) {
        playerY = playerY - blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right() {
    if (playerX <= 850) {
        playerX = playerX + blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
