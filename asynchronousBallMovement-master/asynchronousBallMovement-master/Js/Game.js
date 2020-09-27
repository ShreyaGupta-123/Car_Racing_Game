class Game{
    constructor(){}

    getState(){
        var gamestateRef=database.ref('gamestate');
        gamestateRef.on("value",(data)=>{
            gamestate=data.val();
        })
    }

    update(state){
        database.ref("/").update({
         gamestate:state
        });
    }

    async start(){
    if(gamestate===0){
        player=new Player();
        var playerCountRef=await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();
        }
        form=new Form;
        form.display();
    }

    car1=createSprite(100,200);
    car1.addImage("car1",car1IMG);
    car2=createSprite(300,200);
    car2.addImage("car2",car2IMG);
    car3=createSprite(500,200);
    car3.addImage("car3",car3IMG);
    car4=createSprite(700,200);
    car4.addImage("car4",car4IMG);
    cars=[car1,car2,car3,car4];
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
      // player.getCarsAtEnd();
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=175;
            var y;
            for(var i in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[i].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y;
        
                }
                
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance=player.distance+10;
        player.update();
        }
        if(player.distance>=3860){
        gamestate=2;
       //player.rank=player.rank+1;
      // Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();
    }

    end(){
        console.log("GAMEOVER");
        console.log(player.rank);
    }
}