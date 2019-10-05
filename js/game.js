class Game{
    constructor(radio){
        console.log("game running");
        this.radio = radio;
        this.industry = new Industry();
        this.eventManager = new EventManager();
    }
    recieve(message,print){
        console.log("game recieves:");
        console.log(message);
    }
}