class Dish{
    constructor(loadOnly,name,dishType, menuPrice,container,optionalIngrediantsArray){
        console.log("new dish created");
        //name price and container do not need to exist on instantiation, but can
        this.loadOnly = loadOnly;
        this.name = name ? name: null;
        this.id = null;
        this.dishType = dishType;
        this.container = container ? container : null;
        this.menuPrice = menuPrice ? menuPrice: 0;
        this.wholesalePrice = 0;
        // this container will determine shown image 
        this.ingrediants = [];
        this.avgRating = 0;
        this.exoticness = 0;
        this.vegetarian = true;
        this.vegan = true;
        this.$dishDisplay = $('#active-dish');
        this.awake();
    }
    awake(){
        if(this.name){
            this.setDishID();
        }
    }
    addIngredient(ingrediantInfo){
        this.ingrediants.push(ingrediantInfo);
        this.wholesalePrice += ingrediantInfo.price;
        this.exoticness += ingrediantInfo.exoticness;
        if(!ingrediantInfo.vegetarian){
            this.vegetarian = false;
        }
        if(!ingrediantInfo.vegan){
            this.vegetarian = false;
        }
        if(!this.loadOnly){
            this.displayDish();
        }
    }
    removeIngredient(i){
        const ingrediant = this.ingrediants[i];
        this.wholesalePrice -= ingrediant.wholesalePrice;
        this.exoticness -= ingrediantInfo.exoticness;
        this.ingrediants.splice(i,1);
    }
    addContainer(containerName){
        this.container = containerName;
        this.displayDish();
    }
    setName(name){
        this.name = name;
        this.setDishID();
    }
    setMenuPrice(menuPrice){
        this.menuPrice = menuPrice;
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
    setDishID(){
        const a = this.name.split(" ").join("_");
        this.id = a.toLowerCase();
    }
    displayDish(){
        console.log("displaying dish");
        this.$dishDisplay.empty();
        if(this.container){
            const $container = $('<div/>').addClass('container '+this.container);
            const $foodContainer = $('<div/>').addClass('dish-container')
            $container.append($foodContainer);
            this.$dishDisplay.append($container);
        }
        if(this.ingrediants.length){
            for(let i = 0; i < this.ingrediants.length; i++){
                const info = this.ingrediants[i];
                const $ingrediant = $('<div/>').addClass("ingrediant ingrediant-display");
                      $ingrediant.css('background-image',"URL(./images/" + info.imgCooked + ")");
                if(i%2 === 0){
                    $ingrediant.addClass('left-ingrediant')
                } else {
                    $ingrediant.addClass('right-ingrediant')
                }
                $('.container').append($ingrediant);
            }
        }
    }
    clearDish(){
        this.$dishDisplay.empty();
    }
    validate(){
        //validates the contents to determine if this is a valid dish that can enter the menu
        console.log(this.name);
        if(this.name && this.name.length){
            if(this.name.length < 5 || this.container === null || this.price === 0 ){
                console.log("name not long enough");
                return false
            }
            if(this.container === null){
                console.log("no container");
                return false;
            }
            if(this.price === 0){
                console.log("no price");
                return false;
            }
        } else {
            return false
        }
        return true
    }
}