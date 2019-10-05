class VisitorGenerator{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("VisitorGenerator",this.recieve);
        console.log("visitor gen running");
    }
    recieve(message,print){
        if(print){
            console.log("VisitorGen recieves:");
            console.log(message);
        }
    }
}