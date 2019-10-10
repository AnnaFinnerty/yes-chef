class Game{
    constructor(radio,testMode){
        console.log("game running");
        this.testMode = testMode;
        this.radio = radio;
        this.radio.addSubscriber("Game",this.recieve.bind(this));
        this.industry = new Industry(this.radio);
        this.eventManager = new EventManager(this.radio);
        this.dialogueGenerator = new DialogueGenerator(this.radio);
        this.restaurant = null;
        this.lengthOfHour = testMode ? 500: 1000;
        this.paused = true;
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.timer = null;
        this.awake();
    }
    awake(){
        $('#pause-button').on('click',()=>{
            this.pause();
        })
    }
    start(){
        console.log("starting game");
        this.createRestuarant();
    }
    createRestuarant(){
        console.log("creating resturant");
        const stylesList = this.industry.getStylesList();
        this.restaurant = new Restuarant(false,stylesList,this.testMode);
        this.restaurant.showRestuarantBuilder();
        this.paused = false;
        this.startTimer();
    }
    startTimer(){
        if(!this.paused){
           this.timer = setInterval(()=>{
               // increment clock in awkwardly written way
                if(this.hour < 24){
                    this.hour++;
                    this.industry.nextVisitors(this.restaurant,this.hour);
                    //toggle open/closed signs at selected hours
                    if(this.hour === this.restaurant.properties.openHour){
                        this.open();
                    }
                    if(this.hour >= this.restaurant.properties.openHour && this.hour < this.restaurant.properties.closeHour){
                        this.stayOpen();
                    }
                    if(this.hour === this.restaurant.properties.closeHour){
                        this.close();
                    }
                } else {
                    this.hour = 0;
                    if(this.day < 30){
                        this.day++;
                        this.industry.updateTrends();
                    } else {
                        this.day = 0;
                        if(this.month < 12){
                            this.month++;
                        } else {
                            this.month = 1;
                            this.year++;
                        }
                    }
                }
                const hourToDisplay = this.hour < 10 ? "0" + this.hour + "00" : this.hour + "00";
                $('#time-display').text(hourToDisplay);
                $('#date-display').text(this.day + "/" + this.month + "/" + this.year);
           },this.lengthOfHour)
        }
    }
    stopTimer(){
        clearInterval(this.timer);
    }
    open(){
        $('#open-display').text("OPEN")
        $('#open-display').removeClass("closed").addClass("open");
    }
    stayOpen(){
        this.industry.nextVisitors(this.restaurant,this.hour);
    }
    close(){
        $('#open-display').text("CLOSED")
        $('#open-display').removeClass("open").addClass("closed");
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
