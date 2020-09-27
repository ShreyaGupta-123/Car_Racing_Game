class Player{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }

    update(name){
    var playerIndex="players/player"+ this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
    }

    updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
    }

    static getPlayerInfo(){
        var playerInfoRef=database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }


    getCarsAtEnd(){
      var playerRank=database.ref('carsAtEnd');
      playerRank.on("value",(data)=>{
          this.rank=data.val();
      }) 
    }

    static updateCarsAtEnd(){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
}

