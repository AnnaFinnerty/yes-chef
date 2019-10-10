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
        const burger = new Dish(true,"Basic Burger","sandwhich",7,"plate");
              burger.addIngredient({
                    id: 'ground_beef',
                    display: 'lettuce',
                    price: .05,
                    calories: 20,
                    classes: ['fruit'],
                    cuisines: ['American','bistro'],
                    methods: ['shred'],
                    applications: ['raw']
              })
              burger.addIngredient({
                id: 'lettuce',
                display: 'lettuce',
                price: .05,
                calories: 20,
                classes: ['fruit'],
                cuisines: ['American','bistro'],
                methods: ['shred'],
                applications: ['raw']
            })
            burger.addIngredient({
                    id: 'tomato',
                    display: 'tomato',
                    price: .2,
                    calories: 20,
                    classes: ['fruit'],
                    cuisines: ['American','bistro'],
                    methods: ['shred'],
                    applications: ['raw']
                })
            burger.addIngredient({
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
    }
}