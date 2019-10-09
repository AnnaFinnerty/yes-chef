class Trend{
    constructor(){
        
    }
}

class Industry{
    constructor(radio){
        console.log("industry running");
        this.radio = radio;
        this.radio.addSubscriber("Industry",this.recieve.bind(this));
        this.vistorGenerator = new VisitorGenerator(this.radio);
        this.totalCompetitors = 20;
        this.trends = {
            priceSensitvityMax: 0,
            priceSensitvityMin: 0,
            priceSensitvity: 0,
            exclusivityMax: 100,
            exclusivityMin: 0,
            exclusivity: 20,
            exoticnessMax: 100,
            exoticnessMin: 0,
            exoticness: 20,
            decorMax: 100,
            decorMin: 0,
            decor: 20,
            menuSizeMax: 40,
            menuSizeMin: 3,
            menuSize: 8,
            vegetarianMax: 75,
            vegetarianMin: 0,
            vegetarian: 5,
            carnivoreMax: 75,
            carnivoreMin: 0,
            carnivore: 5, 
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