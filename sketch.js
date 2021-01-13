var ball;
var database;
var position,ballref
function setup(){
    createCanvas(500,500);
    database = firebase.database()
ballref = database.ref("ball/position")
ballref.on("value",readfunction)

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writefunction(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writefunction(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writefunction(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writefunction(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readfunction(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}

function writefunction(x,y){
database.ref("ball/position").update({
    x:ball.x + x,
    y:ball.y + y
})
}

