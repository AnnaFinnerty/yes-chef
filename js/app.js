$( document ).ready(function() {
    console.log( "ready!" );
    const app = new App();
});

class App{
    constructor(){
        this.awake();
    }
    awake(){
        this.radio = new Radio();
        this.radio.addEvent("newGame",this.newGame);
        this.ingrediantsDB = new Ingrediants(this.radio);
        this.uiController = new UIController(this.radio);
        this.newGame();
    }
    newGame(){
        console.log("new game");
        this.game = new Game(this.radio);
        this.game.start();
    }
}

