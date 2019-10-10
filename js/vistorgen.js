class VisitorGenerator{
    constructor(){
        //this.radio = radio;
        //this.radio.addSubscriber("VisitorGenerator",this.recieve.bind(this));
        console.log("visitor gen running");
    }
    createVisitorWave(resturant,trends,hour){
        console.log("creating visitor wave");
        console.log(resturant);
        console.log(trends);
        console.log(hour);
        const waveSize = (hour) * resturant.properties.rating;
        console.log('wavesize',waveSize);
        //simulate visitor resturant choice
        for(let t in trends){
            const current = trends[t]['current'];
            console.log(current);
        }
    }
    createVisitor(hour,stars,trends){
        console.log(trends);
        //evaluate menu first
        
        const first = this.randomFromArray(firstNames);
        const last = this.randomFromArray(lastNames);
        const trendSensitivity = Math.floor(Math.random()*100)/100;
        const vegetarian = Math.random() < trends.vegetarian ? true : false;
        const carnivore = !vegetarian && Math.random() < trends.carnivore ? true : false;
        const allergy = Math.random() < .1 ? this.randomFromArray(allergies) : null;
        const visitor = new Visitor(trendSensitivity, first + " " + last,vegetarian,carnivore,allergy);
        console.log(visitor);
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