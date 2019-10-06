class Visitor{
    constructor(name,age,preferences,){
        console.log("new visitor created");
        this.name = name;
        this.age = age;
        this.preferences = preferences;
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