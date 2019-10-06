class RestaurantBuilder{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("ResturantBuilder",this.recieve);
        this.window = $('#modal-window');
        console.log(this.window)
    }
    openUI(){

    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}