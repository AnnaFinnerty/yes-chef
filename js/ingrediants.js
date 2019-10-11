class Ingrediants{
    constructor(){
        console.log("ingrediants running");
        this.source = tempIngrediants;
        this.requestPaths = {
            returnIngrediantCategories: this.getCategories.bind(this),
            returnCategoryList: this.getCategory.bind(this),
        }
        this.displayElements = {
            $ingrediantsSidebar: $("#ingrediants-sidebar"),
            $ingrediantsSelector: $("#ingrediants-selector"),
            $ingrediantsTabsContainer: $("#ingrediants-tabs"),
            $ingrediantsTabs: []
        }
        this.selectedTab = null;
        this.selectedIngrediants = [];
        this.awake();
    }
    awake(){
        this.displayElements.$ingrediantsTabsContainer.on('click',(e)=>{
            if(e.target.className === "ingrediant-tab"){
                console.log("tab clicked!");
                const tabNum = e.target.getAttribute('data-id');
                this.updateTabs(tabNum);
            }
        })
        this.buildTabs();
    }
    getIngrediant(category,ingrediantID){
        //console.log("getIngrediant",category,ingrediantID);
        if(this.source[category][ingrediantID]){
            return this.source[category][ingrediantID];
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
        return this.source[category];
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
    buildTabs(){
        //if tab elements are not built, build and store tabs
        const categories = this.getCategories();
        for(let i = 0; i < categories.length; i++){
            const $tab = $('<div/>').attr('data-id',i);
                  $tab.addClass("ingrediant-tab");
            $tab.text(categories[i]);
            this.displayElements.$ingrediantsTabsContainer.append($tab);
            this.displayElements.$ingrediantsTabs.push($tab);
        }
        this.updateTabs();
    }
    updateTabs(newTabNum){
        console.log(newTabNum);
        console.log(this.selectedTab);
        if(this.selectedTab === null){
            this.selectedTab = 0;
            this.displayElements.$ingrediantsTabs[0].addClass("selected");
        } else {
            
            if(this.selectedTab !== newTabNum){
                this.displayElements.$ingrediantsTabs[this.selectedTab].removeClass("selected");
                this.displayElements.$ingrediantsTabs[newTabNum].addClass("selected");
                this.selectedTab = newTabNum;
            }
        }
        this.updateSelectableItems();
    }
    updateSelectableItems(){
        this.displayElements.$ingrediantsSelector.empty();
        const categories = this.getCategories();
        const category = categories[this.selectedTab];
        const items = this.getCategory(category);
        console.log(items);
        for(let i in items){
            console.log(items[i]);
            const $item = $('<div/>').attr('data-id',items[i].id);
                  $item.attr('data-class',category);
                  $item.text(items[i].display);
                  $item.addClass("ingrediant ingrediant-sidebar");
                  $item.css('background-image',"URL(./images/" + items[i].imgSelect + ")");
                  //$item.addClass(category);
                 // $item.attr("draggable",true);
                //   $item.on("drag",(e)=>{
                //       console.log(e);
                //       e.dataTransfer.setData('id', items[i].id);})
                  
            this.displayElements.$ingrediantsSelector.append($item);
        }
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
            vegetarian: true,
            vegan: true,
            classes: ['fruit'],
            cuisines: ['American','bistro'],
            methods: ['slice', 'chop', 'dice'],
            applications: ['raw','baked'],
            imgCooked:"apple_whole.png",
            imgSelect:"apple_whole.png",
        },
    },
    vegetables:{
        lettuce:{
            id: 'lettuce',
            display: 'lettuce',
            price: .05,
            calories: 0,
            vegetarian: true,
            vegan: true,
            exoticness: 0,
            classes: ['vegetable'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw'],
            imgCooked:"lettuce.png",
            imgSelect:"lettuce.png",
        },
        kale:{
            id: 'kale',
            display: 'kale',
            price: .05,
            calories: 0,
            exoticness: 1,
            vegetarian: true,
            vegan: true,
            classes: ['vegetable'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw'],
            imgCooked:"lettuce.png",
            imgSelect:"lettuce.png",
        },
        tomato:{
            id: 'tomato',
            display: 'tomato',
            price: .3,
            calories: 20,
            exoticness: 0,
            vegetarian: true,
            vegan: true,
            classes: ['vegetable'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw'],
            imgCooked:"tomato_slice.png",
            imgSelect:"tomato.png",
        },
        onion:{
            id: 'onion',
            display: 'onion',
            price: .1,
            calories: 20,
            exoticness: 0,
            vegetarian: true,
            vegan: true,
            classes: ['vegetable'],
            cuisines: ['American','bistro'],
            methods: ['shred'],
            applications: ['raw'],
            imgCooked:"onion_whiole.png",
            imgSelect:"onion_whiole.png",
        },
    },
    grains:{
        spaghetti:{
            id: 'spaghetti',
            display: 'spaghetti',
            price: .2,
            calories: 20,
            exoticness: 0,
            vegetarian: true,
            vegan: true,
            classes: ['grain', 'noodle'],
            cuisines: ['American','Italian'],
            methods: ['shred'],
            applications: ['raw'],
            imgCooked:"pasta.png",
            imgSelect:"pasta.png",
        },
        rice:{
            id: 'rice',
            display: 'rice',
            price: .2,
            calories: 40,
            exoticness: 0,
            vegetarian: true,
            vegan: true,
            classes: ['grain'],
            cuisines: ['American','Chinese','Japanese'],
            methods: [],
            applications: [],
            imgCooked:"rice.png",
            imgSelect:"rice.png",
        },
    },
    dairy:{
        cheddar:{
            id: 'cheddar',
            display: 'cheddar',
            price: .2,
            calories: 40,
            exoticness: 0,
            vegetarian: true,
            vegan: false,
            classes: ['dairy','cheese'],
            cuisines: ['American'],
            methods: [],
            applications: [],
            imgCooked:"cheddar.png",
            imgSelect:"cheddar.png",
        },
        milk:{
            id: 'milk',
            display: 'milk',
            price: .2,
            calories: 40,
            exoticness: 0,
            vegetarian: true,
            vegan: false,
            classes: ['dairy'],
            cuisines: ['American'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"default_carton.png",
        },
        heavy_cream:{
            id: 'heavy_cream',
            display: 'heavy cream',
            price: .4,
            calories: 80,
            exoticness: 2,
            vegetarian: true,
            vegan: false,
            classes: ['dairy'],
            cuisines: ['American'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"default_carton.png",
        },
        yogurt:{
            id: 'yogurt',
            display: 'yogurt',
            price: .3,
            calories: 60,
            exoticness: 1,
            vegetarian: true,
            vegan: true,
            classes: ['dairy'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"",
        }
    },
    meat:{
        ground_beef:{
            id: 'ground_beef',
            display: 'ground beef',
            price: .5,
            calories: 120,
            exoticness: 0,
            vegetarian: false,
            vegan: false,
            classes: ['meat','beef'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"ground_beef_patty.png",
            imgSelect:"ground_beef_uncooked.png",
        },
        beef_tenderloin:{
            id: 'beef_tenderloin',
            display: 'beef tenderloin',
            price: .5,
            calories: 120,
            exoticness: 1,
            vegetarian: false,
            vegan: false,
            classes: ['meat','pork'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"",
        },
        pork_shortrib:{
            id: 'pork_shortrib',
            display: 'pork shortrib',
            price: .5,
            calories: 120,
            exoticness: 1,
            vegetarian: false,
            vegan: false,
            classes: ['meat','pork'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"",
        }, 
    },
    poultry:{
        chicken_breast:{
            id: 'chicken_breast',
            display: 'chicken breast',
            price: .5,
            calories: 100,
            exoticness: 0,
            vegetarian: false,
            vegan: false,
            classes: ['poultry','chicken'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"chicen_breast_cooked.png",
            imgSelect:"chicen_breast_uncooked.png",
        },
        chicken_wing:{
            id: 'chicken_wing',
            display: 'chicken wing',
            price: .5,
            calories: 70,
            exoticness: 0,
            vegetarian: false,
            vegan: false,
            classes: ['poultry','chicken'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"chicken_wing.png",
        },
    },
    fish:{
        cod:{
            id: 'cod',
            display: 'cod',
            price: .5,
            calories: 60,
            exoticness: 0,
            vegetarian: false,
            vegan: false,
            classes: ['fish'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"cod.png",
        },
    },
    shellfish:{
        shrimp:{
            id: 'shrimp',
            display: 'shrimp',
            price: .5,
            calories: 50,
            exoticness: 0,
            vegetarian: false,
            vegan: false,
            classes: ['shellfish'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"",
        },
    },
    spices:{
        tarragon:{
            id: 'tarragon',
            display: 'tarragon',
            price: .05,
            calories: 0,
            exoticness: 0,
            classes: ['mic'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"default_jar_green.png",
        },
    },
    misc:{
        vinegar:{
            id: 'vinegar',
            display: 'vinegar',
            price: .05,
            calories: 0,
            classes: ['misc'],
            cuisines: ['American','Greek'],
            methods: [],
            applications: [],
            imgCooked:"",
            imgSelect:"",
        },
    },
}