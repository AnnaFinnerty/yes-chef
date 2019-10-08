class Industry{
    constructor(radio){
        console.log("industry running");
        this.radio = radio;
        this.radio.addSubscriber("Industry",this.recieve.bind(this));
        this.vistorGenerator = new VisitorGenerator(this.radio);
        this.totalCompetitors = 20;
        
        this.restuarantStyles = {
            "fast":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "cafe":{},
            "casual":{},
            "bistro":{},
            "high end":{},
            "pizza":{},
            "sushi":{},
        }
    }
    placeCompetitors(){
        let remainingCompetitors = this.totalCompetitors;
        const styles = Object.keys(this.restuarantStyles);
        
    }
    recieve(message,print){
        if(print){
            console.log("Industry recieves:");
            console.log(message);
        }
    }
}