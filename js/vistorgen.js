class VisitorGenerator{
    constructor(radio){
        this.radio = radio;
        console.log("visitor gen running");
    }
    recieve(message,print){
        if(print){
            console.log("VisitorGen recieves:");
            console.log(message);
        }
    }
}