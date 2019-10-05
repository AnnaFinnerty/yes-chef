class EventManager{
    constructor(radio){
        console.log("event manager running");
        this.radio = radio;
    }
    recieve(message,print){
        if(print){
            console.log("EventManager recieves:");
            console.log(message);
        }
    }
}