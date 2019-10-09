class VisitorGenerator{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("VisitorGenerator",this.recieve.bind(this));
        console.log("visitor gen running");
    }
    createVisitor(trend){
        const first = this.randomFromArray(firstNames);
        const last = this.randomFromArray(lastNames);
        const visitor = new Visitor(first + " " + last);
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