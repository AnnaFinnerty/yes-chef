class ViewWindow{
    constructor(radio){
        console.log("viewWindows running");
        this.radio = radio;
        this.radio.addSubscriber("ViewWindow",this.recieve.bind(this));
        this.displayElements = {
            
        }
    }
    recieve(message,print){
        if(print){
            console.log("ViewWindow recieves:");
            console.log(message);
        }
    }
}