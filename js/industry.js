class Industry{
    constructor(radio){
        console.log("industry running");
        this.radio = radio;
        this.radio.addSubscriber("Industry",this.recieve);
        this.vistorGenerator = new VisitorGenerator(this.radio);
        this.restuarantStyles = {
            "fast":{},
            "cafe":{},
            "casual":{},
            "bistro":{},
            "brasserie":{},
            "high end":{},
            "italian":{},
            "chinese":{},
            "pizza":{},
        }
    }
    recieve(message,print){
        if(print){
            console.log("Industry recieves:");
            console.log(message);
        }
    }
}