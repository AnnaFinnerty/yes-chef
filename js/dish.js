class Dish{
    constructor(name,menuPrice,container){
        //name price and container do not need to exist on instantiation, but can
        this.name = name ? name: null;
        this.container = container ? container : null;
        this.menuPrice = menuPrice ? menuPrice: 0;
        this.wholesalePrice = 0;
        // this container will determine shown image 
        this.ingrediants = [];
        this.avgRating = 0;
    }
    setName(name){
        this.name = name;
    }
    setMenuPrice(menuPrice){
        this.menuPrice = menuPrice;
    }
    addIngredient(ingrediantInfo){
        this.ingrediants.push(ingrediantInfo);
        this.wholesalePrice += ingrediantInfo.price;
    }
    getDishInfo(){
        const info = {
            name: this.name,
            container: this.container,
            menuPrice: this.menuPrice,
            wholesalePrice: this.wholesalePrice,
            ingrediants: this.ingrediants,
            avgRating: this.avgRating,
        }
        return info
    }
    validate(){
        //validates the contents to determine if this is a valid dish that can enter the menu
        if(this.name.length < 10 || !this.ingrediants.length || this.container === null || this.price === 0 ){
            return false
        }
        return true
    }
}