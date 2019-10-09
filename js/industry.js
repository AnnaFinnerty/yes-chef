
class Industry{
    constructor(radio){
        console.log("industry running");
        this.radio = radio;
        this.radio.addSubscriber("Industry",this.recieve.bind(this));
        this.vistorGenerator = new VisitorGenerator(this.radio);
        this.totalCompetitors = 20;
        this.trends = {
            priceSensitivity: {
                current: 5,
                max: 100,
                min: 0,
            },
            exclusivity: {
                current: 5,
                max: 100,
                min: 0,
            },
            exoticness: {
                current: 20,
                max: 100,
                min: 0,
            },
            decor: {
                current: 20,
                max: 100,
                min: 0,
            },
            menuSize: {
                current: 8,
                max: 40,
                min: 3,
            },
            vegetarian: {
                current: 5,
                max: 75,
                min: 3,
            },
            carnivore: {
                current: 5,
                max: 75,
                min: 0,
            },
        }
        this.restuarantStyles = {
            "fast":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "cafe":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "bistro":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "high end":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "pizza":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
            "sushi":{
                numCompetitors: 0,
                characteristics: ["ground beef"],
                avgRating: 3,
                avgDecorRating: 1,
            },
        }
        this.awake();
    }
    awake(){
        $('#industry-menu-dropdown-button').on('click',()=>{
            console.log("industry click")
            this.showIndustryModal();
        })
        this.placeCompetitors();
    }
    placeCompetitors(){
        console.log("placing competitors")
        let remainingCompetitors = this.totalCompetitors;
        const styles = Object.keys(this.restuarantStyles);
        while(remainingCompetitors > 0){
            const randomStyle = styles[Math.floor(Math.random()*styles.length)];
            this.restuarantStyles[randomStyle]['numCompetitors'] += 1;
            remainingCompetitors--;
        }
        console.log(this.restuarantStyles);
    }
    updateTrends(){
        console.log("updating trends");
        for(let t in this.trends){
            const trend = this.trends[t];
            const r = Math.random();
            
            //create a random number to determine if(and in what direction!) the trend will change
            if(r < .3){
                //trend going down
                if(trend.current - 1 > trend.min){
                    trend.current -= 1;
                }

            } else if (r > .7){
                //trend going up
                if(trend.current + 1 < trend.max){
                    trend.current += 1;
                }
            }
        }
    }
    nextVisitors(){
        console.log("creating new visitor");
        this.vistorGenerator.createVisitor();
    }
    randomBetween(start,end){
        return Math.floor(Math.random()*(end-start))+start
    }
    showIndustryModal(){
        const modal = new IndustryModal(this);
    }
    getStylesList(){
        const list = [];
        for(let style in this.restuarantStyles){
            list.push(style);
        }
        return list
    }
    recieve(message,print){
        if(print){
            console.log("Industry recieves:");
            console.log(message);
        }
    }
}