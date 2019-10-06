class RestaurantBuilder{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("ResturantBuilder",this.recieve.bind(this));
        this.window = $('#modal-window-text');
        this.defaultProperties = {}
        console.log(this.window)
    }
    openUI(){
        this.window.append('<h3>Restuarant Builder</h3>')
    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}