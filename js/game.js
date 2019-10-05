class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry();
        this.eventManager = new EventManager();
        this.restaurant = null;
        this.lengthOfHour = 1000;
        this.paused = false;
    }
    start(){
        console.log("starting game");
        this.createRestuarant();
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
        console.log("game recieves:");
        console.log(message);
    }
}