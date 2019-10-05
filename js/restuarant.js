class Restuarant{
    constructor(name,style,tables){
        //these parameters must exist!
        this.name = null;
        //style of food
        this.style = null;
        this.tables = {};
        
        this.profit = 0;
        this.rating = 0;
        this.incomeHistoryDaily = [];
        this.incomeHistoryMonthly = [];

        //decor properties
        this.decor = {
            
            floor: {
                type: "board",
                color: "brown",
            },
            walls:{
                type: "wallpaper1",
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