class Visitor{
    constructor(trendSensitivity, name,vegetarian,carnivore,allergy,priceSensitvity,exclusivity,exoticness,decor,menuSize){
        console.log("new visitor created");
        this.trendSensitivity = trendSensitivity;
        this.name = name;
        this.priceSensitvity = priceSensitvity;
        this.exclusivity = exclusivity;
        this.exoticness = exoticness;
        this.decor = decor;
        this.menuSize = menuSize;
        this.isVegetarian = vegetarian;
        this.isCarnivore = carnivore;
        this.hasAllergy = allergy; 
    }
    rate(dish){
        const rating = 75;
        return rating
    }
    rateDish(menu){

        const choices = [];
        for(let i in menu){
            //evaluate menu options
            const item = menu[i];
            if(this.vegetarian){
                if(item.vegetarian || item.vegan){
                    choices.push(item);
                }
            } else {

            }
        }
        const rating = this.rate(dish);
        return rating
    }
}