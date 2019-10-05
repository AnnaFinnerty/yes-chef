class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry();
        this.eventManager = new EventManager();
        this.lengthOfHour = 1000;
        this.paused = false;
    }
    start(){
        console.log("starting game");
        this.createRestuarant();
    }
    createRestuarant(){
        console.log("creating resturant");
    }
    startTimer(){

    }
    stopTimer(){

    }
    pause(){
        this.paused = true;
    }
    unpause(){
        this.paused = false;
    }
    recieve(message,print){
        console.log("game recieves:");
        console.log(message);
    }
}