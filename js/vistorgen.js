class VisitorGenerator{
    constructor(){
        //this.radio = radio;
        //this.radio.addSubscriber("VisitorGenerator",this.recieve.bind(this));
        console.log("visitor gen running");
    }
    createVisitorWave(restuarant,trends,industryAverages,hour){
        let waveSize = (hour) * (restuarant.properties.rating/10);
        //console.log('wavesize',waveSize);
        // if number of tables above industry average, lose those visitors interested in exclusivity
        if(industryAverages['tables'] < restuarant.properties.tables){
            waveSize = waveSize * (trends.exclusivity/100);
        } 
        //console.log('after tables', waveSize);
        // if number of tables above industry average, lose those visitors interested in exclusivity
        if(industryAverages['tables'] < restuarant.properties.tables){
            waveSize = waveSize * (trends.exclusivity/100);
        }
        //console.log('after tables', waveSize);
        if(industryAverages['decorScore'] > restuarant.properties.decorScore){
            waveSize = waveSize * (trends.decor/100);
        } 
       
        //only create visitors who have actually "chosen" resturant
        const visitors = [];
        for(var i = 0; i < waveSize; i++){
            const visitor = this.createVisitor(restuarant.menu,trends);
            visitors.push(visitor);
        }
        return visitors
    }
    createVisitor(menu,trends){        
        const first = this.randomFromArray(firstNames);
        const last = this.randomFromArray(lastNames);
        const trendSensitivity = Math.floor(Math.random()*100)/100;
        const vegetarian = Math.random() < trends.vegetarian ? true : false;
        const carnivore = !vegetarian && Math.random() < trends.carnivore ? true : false;
        const allergy = Math.random() < .1 ? this.randomFromArray(allergies) : null;
        const visitor = new Visitor(menu,trendSensitivity, first + " " + last,vegetarian,carnivore,allergy);
        return visitor;
    }
    randomFromArray(arr){
        const r = Math.floor(Math.random()*arr.length);
        return arr[r];
    }
    randomBetween(start,end){
        return Math.floor(Math.random()*(end-start))+start
    }
    recieve(message,print){
        if(print){
            console.log("VisitorGen recieves:");
            console.log(message);
        }
    }
}

const firstNames = ["Annie","Brad","Cierra","Jordan","Joseph","Franco","Lyaysan","Micah","Mike","Orrin","Tyler","Walter","George","Josh"]

const lastNames = ["Finnerty","Donakowski","Nease","Bruner","Benbella","Aguilar","Glick","Wierenga","Cardarelli","Johnson","Walker","Sylvester","Chapman","Vinlove"]

const allergies = ["shellfish","milk"];