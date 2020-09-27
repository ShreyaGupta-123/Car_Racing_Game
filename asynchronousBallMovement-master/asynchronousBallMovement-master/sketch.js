var database;
var backgroundImage,playerCount,allPlayers;
var gamestate=0;
var distance=0;
var form,player,game;
var car1, car2, car3, car4, cars;
var car1IMG,car2IMG,car3IMG,car4IMG;
var trackIMG,groundIMG;

function preload(){
    car1IMG=loadImage('./Images/car1.png');
    car2IMG=loadImage('./Images/car2.png');
    car3IMG=loadImage('./Images/car3.png');
    car4IMG=loadImage('./Images/car4.png');
    trackIMG=loadImage('./Images/track.jpg');
    groundIMG=loadImage('./Images/ground 2.png');
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.end();
    }
}
