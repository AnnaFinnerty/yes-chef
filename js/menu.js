class Menu{
    constructor(){
        console.log("menu running");
        this.menu = null;
        this.menuLength = 0;
        this.avgDishPrice = 0;
        this.$modalWindow = $(".modal-window");
        this.awake();
    }
    awake(){
        $('#menu-dropdown-button').on('click',()=>{
            this.showMenu();
        })
        if(!this.menu){
            this.menu = {};
            this.defaultMenu();
        } else {
            this.menu = {};
        }
    }
    addDish(dish){
        console.log(dish);
        console.log(this.menu);
            this.menu[dish.id] = dish;
            this.menuLength += 1;
            this.calcAvgMenuPrice();
            console.log(this.menu);
        
    }
    removeDish(dishID){
        console.log("removing dish");
        if(this.menu[dishID]){
            this.menuLength -= 1;
            delete this.menu[dishID]
            this.calcAvgMenuPrice();
        } else {
            console.log("MenuError: Dish " + dishID + " not found");
        }
    }
    calcAvgMenuPrice(){
        let x = 0;
        for(let item in this.menu){
            x += item.price;
        }
        this.avgDishPrice = x/this.menuLength;
    }
    showMenu(){
        console.log("showing menu!");
        const modal = new MenuModal(this);
    }
    defaultMenu(){
        const salad = new Dish(true,"Simple Salad","salad",4,"bowl");
              salad.addIngredient({
                id: 'lettuce',
                display: 'lettuce',
                price: .05,
                calories: 20,
                classes: ['fruit'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw']
            })
            salad.addIngredient({
                    id: 'tomato',
                    display: 'tomato',
                    price: .2,
                    calories: 20,
                    classes: ['fruit'],
                    cuisines: ['American','bistro'],
                    methods: ['shred'],
                    applications: ['raw']
                })
            salad.addIngredient({
                id: 'onion',
                display: 'onion',
                price: .1,
                calories: 20,
                classes: ['vegetable'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw']
            })
        this.addDish(salad);
        const pasta = new Dish(true,"Simple Spaghetti","noodle",4,"bowl");
              pasta.addIngredient({
                id: 'lettuce',
                display: 'lettuce',
                price: .05,
                calories: 20,
                classes: ['fruit'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw']
            })
            pasta.addIngredient({
                    id: 'tomato',
                    display: 'tomato',
                    price: .2,
                    calories: 20,
                    classes: ['fruit'],
                    cuisines: ['American','bistro'],
                    methods: ['shred'],
                    applications: ['raw']
                })
            pasta.addIngredient({
                id: 'onion',
                display: 'onion',
                price: .1,
                calories: 20,
                classes: ['vegetable'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw']
            })
            pasta.addIngredient({
                id: 'basil',
                display: 'basil',
                price: .05,
                calories: 0,
                exoticness: 0,
                classes: ['mic'],
                cuisines: ['American','Greek'],
                methods: [],
                applications: [],
                imgCooked:"",
                imgSelect:"default_jar_green.png",
                addClass: "scale-0",
            })
        this.addDish(pasta);
        const steak = new Dish(true,"Simple Steak","plate",4,"plate");
              steak.addIngredient({
                id: 'steak',
                display: 'steak',
                price: .5,
                calories: 120,
                exoticness: 1,
                vegetarian: false,
                vegan: false,
                classes: ['meat','beef'],
                cuisines: ['American','Greek'],
                methods: [],
                applications: [],
                imgCooked:"steak_cooked.png",
                imgSelect:"steak_raw.png",
                addClass: "scale-2",
            })
            steak.addIngredient({
                id: 'potato',
                display: 'potato',
                price: .1,
                calories: 20,
                exoticness: 0,
                vegetarian: true,
                vegan: true,
                classes: ['vegetable'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw'],
                imgCooked:"potato.png",
                imgSelect:"potato.png",
                addClass: "scale-0",
            })
        this.addDish(steak);
    }
}