class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry(this.radio);
        this.eventManager = new EventManager(this.radio);
        this.resturantBuilder = new RestaurantBuilder(this.radio);
        this.dialogueGenerator = new DialogueGenerator(this.radio);
        this.restaurant = null;
        this.lengthOfHour = 1000;
        this.paused = false;
        this.timer = null;
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
        console.log(this.restaurant);
    }
    startTimer(){
        if(!this.paused){
           this.timer = setInterval(()=>{
                this.update();
           },this.lengthOfHour)
        }
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    update(){
        //call update methods here
        //eventManager checks for new events
        //visitorGen adds new visitors if open
        this.actuate();
    }
    actuate(){
        //acuate updates animations if necessary
    }
    pause(){
        this.paused = true;
        this.stopTimer();
    }
    unpause(){
        this.paused = false;
        this.startTimer();
    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}