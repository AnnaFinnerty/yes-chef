class Ingrediants{
    constructor(radio){
        this.radio = radio;
        console.log("ingrediants running");
        this.radio.addSubscriber("Ingrediants",this.recieve.bind(this));
        this.requestPaths = {
            returnIngrediantCategories: this.getCategories,
        }
    }
    getIngrediant(ingrediantID){
        const source = tempIngrediants;
        if(source[ingrediantID]){
            return source[ingrediantID];
        } else {
            console.log("IngrediantsError: Ingrediant not found");
        }
    }
    getCategories(){
        //returns list of categories as an array (for menus, tabs, etc.)
        const source = tempIngrediants;
        const categories = [];
        for(let cat in source){
            categories.push(cat);
        }
        return categories;
    }
    getCategory(){
        
    }
    getListByCategory(){
        //returns all ingredients divides by category... maybe not needed?
        const source = tempIngrediants;
        const categories = {};
        for(let cat in source){
            categories[cat] = [];
            for(let i in source[cat]){
                const item = source[cat][i];
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
            console.log("DialogueGenError: request failure for type:" + request.type);
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

        },
        milk:{

        },
        heavy_cream:{

        },
        whipped_cream:{

        },
        yogurt:{

        }
    },
    meat:{
        beef_ground:{

        },
        pork_shortrib:{

        },
        beef_tenderloin:{

        }
    },
    poultry:{
        chicken_breat:{

        },
        chicken_wing:{

        },
    },
    fish:{

    },
    shellfish:{

    },
    spices:{

    },
    misc:{

    },
}