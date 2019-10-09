class Visitor{
    constructor(name,priceSensitvity,exclusivity,exoticness,decor,menuSize,vegetarian,carnivore){
        console.log("new visitor created");
        this.name = name;
        this.priceSensitvity = priceSensitvity;
        this.exclusivity = exclusivity;
        this.exoticness = exoticness;
        this.decor = decor;
        this.menuSize = menuSize;
        this.vegetarian = vegetarian;
        this.carnivore = carnivore; 
    }
    rate(dish){
        const rating = 75;
        return rating
    }
    lookForDish(menu){
        const choices = [];
        for(let i in menu){
            //evaluate menu options
        }
        const rating = this.rate(dish);
        return rating
    }
}