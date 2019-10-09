$( document ).ready(function() {
    console.log( "ready!" );
    const app = new App();
});

class App{
    constructor(){
        this.testMode = false;
        this.radio = new Radio();
        //this.modalController = new ModalController(this.radio);
        this.newGame();
    }
    newGame(){
        console.log("new game");
        this.game = new Game(this.radio,this.testMode);
        this.game.start();
    }
}

