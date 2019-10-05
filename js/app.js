$( document ).ready(function() {
    console.log( "ready!" );
    newGame();
});

function newGame(){
    console.log("new game");
    this.radio = new Radio();
    this.radio.addEvent("new_game",this.newGame);
    this.game = new Game(this.radio);
}

