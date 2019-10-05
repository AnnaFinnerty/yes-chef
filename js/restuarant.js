class Restuarant{
    constructor(name,style,tables,waitstaff,startProfit,startRating){
        console.log("new resturant created");
        //these parameters must exist!
        this.name = name;
        //style of food
        this.style = style;
        //num of tables
        this.tables = tables;
        this.waitstaff = waitstaff;
        this.profit = 0;
        this.rating = 0;
        this.incomeHistoryDaily = [];
        this.incomeHistoryMonthly = [];

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
        this.profit += amt;
    }
    loss(amt){
        this.profit -= amt;
    }
    validator(){

    }
}