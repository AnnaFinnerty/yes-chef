class Ingrediants{
    constructor(radio){
        this.radio = radio;
        console.log("ingrediants running");
        this.source = tempIngrediants;
        this.radio.addSubscriber("Ingrediants",this.recieve.bind(this));
        this.requestPaths = {
            returnIngrediantCategories: this.getCategories.bind(this),
            returnCategoryList: this.getCategory.bind(this),
        }
    }
    getIngrediant(ingrediantID){
        if(this.source[ingrediantID]){
            return this.source[ingrediantID];
        } else {
            console.log("IngrediantsError: Ingrediant not found");
        }
    }
    getCategories(){
        //returns list of categories as an array (for menus, tabs, etc.)
        const categories = [];
        for(let cat in this.source){
            categories.push(cat);
        }
        return categories;
    }
    getCategory(category){
        console.log("getting category");
        
    }
    getListByCategory(){
        //returns all ingredients divides by category... maybe not needed?
        const categories = {};
        for(let cat in this.source){
            categories[cat] = [];
            for(let i in this.source[cat]){
                const item = this.source[cat][i];
                categories[cat].push({id:item.id,display: item.display});
            }
        }
        console.log(categories);
        return categories;
    }
    recieve(request,print){
        if(print){
            console.log("Ingrediants recieves:");
            console.log(request);
        }
        if(this.requestPaths[request.command]){
            const callback = this.requestPaths[request.command];
            const info = callback();
            this.radio.callSubscriber(request.return,{command: request.command,info:info})
        } else {
            console.log("IngrediantsDBGenError: request failure for type:" + request.type);
        }
    }
}

const tempIngrediants = {
    fruit:{
        apple:{
            id: 'apple',
            display: 'apple',
            price: .1,
            calories: 20,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['slice', 'chop', 'dice'],
            applications: ['raw','baked']
        },
    },
    vegetables:{
        lettuce:{
            id: 'lettuce',
            display: 'lettuce',
            price: .05,
            calories: 20,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw']
        },
        tomato:{
            id: 'tomato',
            display: 'tomato',
            price: .2,
            calories: 20,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw']
        },
    },
    grains:{
        spaghetti:{
            price: .2,
            calories: 20,
            classes: ['grain', 'noodle'],
            cuisines: ['American','Italian'],
            methods: ['shred'],
            applications: ['raw']
        },
        rice:{
            price: .2,
            calories: 40,
            classes: ['grain'],
            cuisines: ['American','Chinese','Japanese'],
            methods: [],
            applications: []
        },
    },
    dairy:{
        cheddar:{
            price: .2,
            calories: 40,
            classes: ['dairy','cheese'],
            cuisines: ['American'],
            methods: [],
            applications: []
        },
        milk:{
            price: .2,
            calories: 40,
            classes: ['dairy'],
            cuisines: ['American'],
            methods: [],
            applications: []
        },
        heavy_cream:{
            price: .4,
            calories: 80,
            classes: ['dairy'],
            cuisines: ['American'],
            methods: [],
            applications: []
        },
        yogurt:{
            price: .3,
            calories: 60,
            classes: ['dairy'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        }
    },
    meat:{
        beef_ground:{
            price: .5,
            calories: 120,
            classes: ['meat','beef'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
        beef_tenderloin:{
            price: .5,
            calories: 120,
            classes: ['meat','pork'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
        pork_shortrib:{
            price: .5,
            calories: 120,
            classes: ['meat','pork'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        }, 
    },
    poultry:{
        chicken_breast:{
            price: .5,
            calories: 100,
            classes: ['poultry','chicken'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
        chicken_wing:{
            price: .5,
            calories: 70,
            classes: ['poultry','chicken'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
    },
    fish:{
        cod:{
            price: .5,
            calories: 60,
            classes: ['fish'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
    },
    shellfish:{
        shrimp:{
            price: .5,
            calories: 50,
            classes: ['shellfish'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
    },
    spices:{
        tarragon:{
            price: .05,
            calories: 0,
            classes: ['mic'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
    },
    misc:{
        vinegar:{
            price: .05,
            calories: 0,
            classes: ['misc'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: []
        },
    },
}