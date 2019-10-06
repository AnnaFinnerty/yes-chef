class Restuarant{
    constructor(radio,name,style,tables = 5,waitstaff = 2,profit = 5000, rating = 3.5){
        console.log("new resturant created");
        this.radio = radio;
        this.radio.addSubscriber("Resturant",this.recieve.bind(this));
        //all properties parameters must exist or validation will fail!!
        this.properties = {
            name: name,
            style: style,
            tables: tables,
            waitstaff: waitstaff,
            profit: profit,
            rating: rating,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        this.name = name;
        //style of food
        this.style = style;
        //num of tables
        this.tables = tables;
        this.waitstaff = waitstaff;
        this.profit = startProfit;
        this.rating = startRating;
        this.incomeHistoryDaily = [];
        this.incomeHistoryMonthly = [];

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