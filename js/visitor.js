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
        this.willComeBack = false; 
    }
    findDish(menu){
        const choices = [];
        for(let i in menu){
            //evaluate menu options
            const item = menu[i];
            if(this.vegetarian){
                if(item.vegetarian || item.vegan){
                    choices.push(item);
                }
            } else {
                choices.push(item);
            }
        }
        console.log(choices);
        const r = Math.floor(Math.random()*choices.length);
        const dish = choices[r];
        console.log(dish);
        const rating = this.rate(dish);
        return rating
    }
    rate(dish){
        const rating = 75;
        return rating
    }
}