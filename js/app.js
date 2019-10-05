$( document ).ready(function() {
    console.log( "ready!" );
    awake();
});

function awake(){
    this.radio = new Radio();
    this.radio.addEvent("new_game",this.newGame);
    this.newGame();
}

function newGame(){
    console.log("new game");
    this.game = new Game(this.radio);
    this.game.start();
}

