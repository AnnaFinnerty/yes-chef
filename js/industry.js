
class Industry{
    constructor(radio){
        console.log("industry running");
        this.radio = radio;
        this.radio.addSubscriber("Industry",this.recieve.bind(this));
        this.vistorGenerator = new VisitorGenerator(this.radio);
        this.dialogueGenerator = new DialogueGenerator();
        this.returningVisitors = [];
        this.competitors = [];
        this.totalCompetitors = 20;
        this.avgMealCost = 10;
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
        this.industryAverages = {};
        this.restuarantStyles = {
            "fast":[],
            "cafe":[],
            "bistro":[],
            "high end":[],
            "pizza":[],
            "sushi":[],
        }
        this.awake();
    }
    awake(){
        $('#industry-menu-dropdown-button').on('click',()=>{
            console.log("industry click")
            this.showIndustryModal();
        })
        this.generateCompetitors();
    }
    generateCompetitors(){
        console.log("generating competitors")
        let remainingCompetitors = this.totalCompetitors;
        const styles = Object.keys(this.restuarantStyles);
        while(remainingCompetitors > 0){
            const randomName = this.dialogueGenerator.suggestRestuarantName();
            const randomStyle = styles[Math.floor(Math.random()*styles.length)];
            const randomOpen = Math.floor(Math.random()*5)+9;
            const randomClose = Math.floor(Math.random()*5)+18;
            const randomTables = Math.floor(Math.random()*5)+5;
            const randomWaitstaff = randomTables-2;
            const randomStars = Math.floor(Math.random()*5);
            const randomDecor = Math.floor(Math.random()*10);
            const randomResturant = new FakeRestuarant(randomName,randomStyle,randomOpen,randomClose,randomTables,randomWaitstaff,0,0,randomStars,randomDecor);
            this.competitors.push(randomResturant);
            remainingCompetitors--;
        }
        this.generateIndustryAverages();
    }
    generateIndustryAverages(){
        const averages = {};
        for(let i = 0; i < this.competitors.length; i++){
            const competitorProps = this.competitors[i]['properties'];
            for(let prop in competitorProps){
                if(prop !== "name" && prop !== "style" && prop !== "filledTables"){
                    if(!averages[prop]){
                        averages[prop] = 0
                    }
                    averages[prop] += competitorProps[prop];
                }
            }
        }
        for(let a in averages){
            averages[a] = averages[a]/this.competitors.length;
        }
        this.industryAverages = averages;
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
    nextVisitors(restaurant,hour){
        console.log("creating new visitor");
        console.log(this.trends);
        const reports = this.vistorGenerator.createVisitorWave(restaurant,this.trends,this.industryAverages,hour);
        return reports
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