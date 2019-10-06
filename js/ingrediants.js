class Ingrediants{
    constructor(){
        console.log("ingrediants running");
    }
    getIngrediant(ingrediantID){
        const source = tempIngrediants;
        if(source[ingrediantID]){
            return source[ingrediantID];
        } else {
            console.log("IngrediantsError: Ingrediant not found");
        }
    }
}

const tempIngrediants = {
    fruit:{
        apple:{
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
            price: .05,
            calories: 20,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw']
        },
        lettuce:{
            price: .05,
            calories: 20,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw']
        },
        tomato:{
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
            
        }
    },
    meat:{

    },
    poultry:{

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