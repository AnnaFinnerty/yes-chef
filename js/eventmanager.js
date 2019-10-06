class EventManager{
    constructor(radio){
        console.log("event manager running");
        this.radio = radio;
        this.radio.addSubscriber("EventManager",this.recieve.bind(this));
        
    }
    //events: food critic
    //events: food poisoning


    recieve(message,print){
        if(print){
            console.log("EventManager recieves:");
            console.log(message);
        }
    }
}