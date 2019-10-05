class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry(this.radio);
        this.eventManager = new EventManager(this.radio);
        this.dialogueGenerator = new DialogueGenerator(this.radio);
        this.restaurant = null;
        this.lengthOfHour = 1000;
        this.paused = false;
    }
    start(){
        console.log("starting game");
        this.radio.addSubscriber("Game",this.recieve);
        this.radio.callSubscriber("EventManager", "test message");
        this.createRestuarant();
    }
    createRestuarant(){
        console.log("creating resturant");
        this.restaurant = new Restuarant(this.radio,"Annie's Bistro","bistro",5,2);
        //console.log(this.restaurant);
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