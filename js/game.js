class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry(this.radio);
        this.eventManager = new EventManager(this.radio);
        this.restaurant = null;
        this.lengthOfHour = 1000;
        this.paused = false;
    }
    start(){
        console.log("starting game");
        this.createRestuarant(this.radio);
    }
    createRestuarant(){
        console.log("creating resturant");
        this.restaurant = new Restuarant("Annie's Bistro","bistro",5,2);
        console.log(this.restaurant);
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
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}