class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry(this.radio);
        this.eventManager = new EventManager(this.radio);
        this.dialogueGenerator = new DialogueGenerator(this.radio);
        this.restaurant = null;
        this.restaurant = {
            name: "Humble Cafe",
            style: "cafe",
            tables: 5,
            waitstaff: 2,
            profitTotal: 5000,
            profitMonth: 500,
            rating: 3.5,
            incomeHistoryDaily: [16,16,16],
            incomeHistoryMonthly: [500,500,500]
        }
        this.lengthOfHour = 1000;
        this.paused = false;
        this.year = 0;
        this.day = 0;
        this.hour = 0;
        this.timer = null;
    }
    start(){
        console.log("starting game");
        this.radio.addSubscriber("Game",this.recieve.bind(this));
        this.radio.addEvent("timeUpdate");
        if(!this.restaurant){
            this.radio.callSubscriber("ModalController",{command:"openResturantBuilder"});
        } else {
            this.createRestuarant();
        }
        
    }
    createRestuarant(properties){
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