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
    apple:{
        price: .1,
        calories: 20,
        classes: ['fruit'],
        cuisines: ['American','bistro'],
        methods: ['slice', 'chop', 'dice'],
        applications: ['raw','baked']
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
    spaghetti:{
        price: .2,
        calories: 20,
        classes: ['noodle'],
        cuisines: ['American','Italian'],
        methods: ['shred'],
        applications: ['raw']
    }
}