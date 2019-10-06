class Ingrediants{
    constructor(radio){
        this.radio = radio;
        console.log("ingrediants running");
        this.requestPaths = {
            
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
    getListByCategory(){
        const source = tempIngrediants;
        const categories = {}
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
            console.log(message);
        }
        if(this.requestPaths[request.type]){

        } else {
            console.log("DialogueGenError: request failelure for type:" + request.type);
        }
    }
}

const tempIngrediants = {
    fruit:{
        apple:{
            id: apple,
            display: apple,
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
            id: lettuce,
            display: lettuce,
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