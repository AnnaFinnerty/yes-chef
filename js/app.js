$( document ).ready(function() {
    console.log( "ready!" );
    awake();
});

function awake(){
    this.radio = new Radio();
    this.radio.addEvent("newGame",this.newGame);
    this.uiController = new UIController();
    this.newGame();
}

function newGame(){
    console.log("new game");
    this.game = new Game(this.radio);
    this.game.start();
}

