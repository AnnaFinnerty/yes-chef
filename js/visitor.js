class Visitor{
    constructor(menu,trendSensitivity, name,vegetarian,carnivore,allergy,priceSensitvity,numOfIngrediants, menuSize){
        console.log("new visitor created");
        this.menu = menu;
        this.trendSensitivity = trendSensitivity;
        this.name = name;
        this.priceSensitvity = priceSensitvity;
        this.numOfIngrediants = numOfIngrediants;
        // this.exclusivity = exclusivity;
        // this.exoticness = exoticness;
        // this.decor = decor;
        this.menuSize = menuSize;
        this.isVegetarian = vegetarian;
        this.isCarnivore = carnivore;
        this.hasAllergy = allergy;
        this.willComeBack = false;
        this.report = {
            rating: 0,
            dish: null,
        }
        this.findDish();
    }
    findDish(){
        console.log("finding dish!");
        const choices = [];
        //evaluate menu options
        for(let i in this.menu.menu){
            const item = this.menu.menu[i];
            if(this.vegetarian){
                if(item.vegetarian || item.vegan){
                    choices.push(item);
                }
            } else {
                choices.push(item);
            }
        }
        const r = Math.floor(Math.random()*choices.length);
        const dish = choices[r];
        this.report.dish = dish;
        this.report.rating = this.rate(dish);
    }
    rate(dish){
        const rating = Math.floor(Math.random()*5);
        return rating
    }
}