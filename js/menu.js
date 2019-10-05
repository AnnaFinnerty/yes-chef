class Menu{
    constructor(){
        console.log("menu running");
        this.menu = {};
        this.menuLength = 0;
        this.avgDishPrice = 0;
        //most common ingrediant?
    }
    addDish(dish){
        if(this.menu[dish]){
            //if dish already exists send error message
            //MTC
        } else {
            this.menu[dish.id] = dish;
            this.menuLength += 1;
            this.calcAvgMenuPrice();
        }
    }
    removeDish(dishID){
        if(this.menu[dishID]){
            this.menuLength -= 1;
            delete this.menu[dishID]
            this.calcAvgMenuPrice();
        } else {
            console.log("MenuError: Dish " + dishID + " not found");
        }
    }
    calcAvgMenuPrice(){
        const x = 0;
        for(let item in this.menu){
            x += item.price;
        }
        this.avgDishPrice = x/this.menuLength;
    }
}