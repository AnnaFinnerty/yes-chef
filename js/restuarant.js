class Restuarant{
    constructor(radio,name = "Corner Cafe",style = "cafe", openHour = 1500, closeHour = 2000, tables = 5,waitstaff = 2,profit = 5000, rating = 3.5){
        console.log("new resturant created");
        this.radio = radio;
        this.radio.addSubscriber("Resturant",this.recieve.bind(this));
        //all properties parameters must exist or validation will fail!!
        this.properties = {
            name: name,
            style: style,
            openHour: openHour,
            closeHour: closeHour,
            tables: tables,
            waitstaff: waitstaff,
            profit: profit,
            rating: rating,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        
        this.menu = new Menu();

        //decor properties
        this.decor = { 
            floor: {
                pattern: "board",
                color: "brown",
            },
            walls:{
                pattern: "wallpaper1",
                color: "blue",
            }

        }

        this.displayElements = {
            $nameDisplay: $('#name-display'),
        }
        
        this.updateName();
    }
    updateName(){
        console.log(this.displayElements.$nameDisplay);
        console.log(this.name);
        this.displayElements.$nameDisplay.text(this.properties.name);
    }
    profit(amt){
        this.properties.profit += amt;
    }
    loss(amt){
        this.properties.profit -= amt;
    }
    validator(){

    }
    recieve(message,print){
        if(print){
            console.log("Resturant recieves:");
            console.log(message);
        }
    }
}