class Restuarant{
    constructor(radio,styles, testMode, name = "Corner Cafe",style = "cafe", openHour = 1500, closeHour = 2000, tables = 5,waitstaff = 2,profitTotal = 5000,profitDaily = 50, rating = 3.5){
        console.log("new resturant created");
        this.radio = radio;
        this.radio.addSubscriber("Resturant",this.recieve.bind(this));
        this.testMode = testMode;
        this.ingrediants = new Ingrediants(this.radio);
        this.styles = styles;
        //all properties parameters must exist or validation will fail!!
        this.properties = {
            name: name,
            style: style,
            openHour: openHour,
            closeHour: closeHour,
            tables: tables,
            filledTables: 0,
            waitstaff: waitstaff,
            profitTotal: profitTotal,
            profitDaily: profitDaily,
            rating: rating,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        
        this.menu = new Menu();
        this.containers = ["plate", "bowl"];
        this.activeDish = null;

        //decor properties
        this.decor = { 
            floor: {
                pattern: "board",
                color: "brown",
            },
            walls:{
                pattern: "wallpaper1",
                color: "blue",
            }

        }
        this.displayElements = {
            $nameDisplay: $('#name-display'),
            $activeIngrediants: $('#active-ingredients'),
            $ingrediantsSelector: $('#ingrediants-selector'),
            $nameInput: $('#dish-name-input'),
        }
        this.awake();
    }
    awake(){
        this.displayElements.$ingrediantsSelector.on('click',(e)=>{
            console.log(e.target);
            const ingrediant = $(e.target).attr('data-id');
            const category = $(e.target).attr('data-class');
            this.addIngredient(category,ingrediant);
        })
        this.displayElements.$activeIngrediants.on('click',(e)=>{
            const category = $(e.target).attr('data-class');
            if(category === "container"){
                const item = $(e.target).attr('data-id');
                this.dish.addContainer(item);
                this.displayElements.$activeIngrediants.empty();
            } else {
                this.dish.removeIngrediant();
            }
        })
        console.log(this.displayElements.$nameDisplay);
        this.displayElements.$nameInput.on('input keyup',(e) => {
            console.log("changing!");
            console.log(this.dish);
            const name = $(e.target).val();
            this.dish.setName(name);
        });
        // this.displayElements.$activeIngrediants.on('dragover',(e)=>{
        //     e.preventDefault();
        // })
        // this.displayElements.$activeIngrediants.on('drop',(e)=>{
        //     console.log("drop");
        //     var data = e.dataTransfer.getData("id");
        //     console.log(data);
        // })
        $('#save-dish-button').on('click',()=>{
            this.saveDish();
        })
        $('#resturant-dropdown-button').on('click',()=>{
            this.showRestuarantBuilder();
        })
        if(!this.testMode){
            new PopUp("Choose a container to start");
        }
        this.updateName();
        this.updateFinanceWindow();
        this.newDish();
    }
    newDish(){
        this.dish = new Dish();
        for(let i = 0; i < this.containers.length; i++){
            const $container = $('<div/>').addClass('ingrediant ingrediant-active');
                  $container.attr('data-id',this.containers[i]);
                  $container.attr('data-class',"container");
                  $container.attr('data-i',i);
                  $container.text(this.containers[i]);
                  this.displayElements.$activeIngrediants.append($container);
        }
    }
    addIngredient(category, ingrediantName){
        console.log('resturant adding',category,ingrediantName);
        const ingrediantInfo = this.ingrediants.getIngrediant(category,ingrediantName);
        this.dish.addIngredient(ingrediantInfo);
        const $item = $('<div/>').attr('data-id',ingrediantInfo.id);
              $item.attr('data-class',category);
              $item.text(ingrediantInfo.display);
              $item.addClass("ingrediant ingrediant-active");
              this.displayElements.$activeIngrediants.append($item);
    }
    updateName(name){
        if(this.dish){
            this.dish.setName(name);
        }
        this.displayElements.$nameDisplay.text(this.properties.name);
    }
    saveDish(){
        console.log("saving dish");
        //check if the dish is valid
        const validDish = this.dish.validate();
        if(validDish){
            this.menu.addDish(this.dish);
            this.dish = null;
        } else {
            new PopUp("Not a valid dish");
        }
    }
    updateTotalTables(addTablesNum){
        this.properties.tables += addTablesNum;
    }
    fillTable(){
        if(this.properties.tables > this.properties.filledTables){
            this.properties.filledTables++;
        }
    }
    emptyTable(){
        if(this.properties.filledTables > 0){
            this.properties.filledTables--;
        }
    }
    profit(amt){
        this.properties.profit += amt;
        this.updateFinanceWindow();
    }
    loss(amt){
        this.properties.profit -= amt;
        this.updateFinanceWindow();
    }
    updateFinanceWindow(){
        $('#profit-daily').text("Daily$: " + this.properties.profitDaily);
        $('#profit-total').text("Total$:" + this.properties.profitTotal);
    }
    showRestuarantBuilder(){
        console.log("showing resturant builder");
        const modal = new RestuarantModal(this);
    }
    validator(){

    }
    recieve(message,print){
        if(print){
            console.log("Resturant recieves:");
            console.log(message);
        }
    }
}