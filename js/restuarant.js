class Restuarant{
    constructor(fake,styles, testMode, name = "Corner Cafe",style = "cafe", openHour = 15, closeHour = 20, tables = 5,waitstaff = 2,profitTotal = 5000,profitDaily = 50, rating = 3.5){
        console.log("new resturant created");
        this.testMode = testMode;
        this.ingrediants = new Ingrediants(this.radio);
        this.styles = styles;
        //all properties parameters must exist or validation will fail!!
        this.properties = {
            daysInOperation: 0,
            totalVisitors: 0,
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
        this.tutorial = true;
        //decor properties
        this.decor = { 
            floor: {
                age: 0,
                pattern: "board",
                color: "brown",
            },
            walls:{
                age: 0,
                pattern: "wallpaper1",
                color: "blue",
            }

        }
        this.displayElements = {
            $nameDisplay: $('#name-display'),
            $activeIngrediants: $('#active-ingredients'),
            $ingrediantsSelector: $('#ingrediants-selector'),
            $nameInput: $('#dish-name-input'),
            $priceInput: $('#dish-price-input'),
            $tablesTotal: $('#tables-total'),
            $tablesFull: $('#tables-full'),
            $tablesFullImage: $('#tables-full-image'),
        }
        if(!fake){
            this.awake();
        }
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
        this.displayElements.$nameInput.on('input keyup',(e) => {
            console.log("changing!");
            console.log(this.dish);
            const name = $(e.target).val();
            this.dish.setName(name);
        });
        this.displayElements.$priceInput.on('input keyup',(e) => {
            console.log("changing!");
            const price = $(e.target).val();
            this.dish.setMenuPrice(price);
            console.log(this.dish);
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
        console.log(this.name);
        this.updateName();
        this.updateFinanceWindow();
        this.updateTableDisplay();
        this.newDish();
        
    }
    newDish(){
        if(this.tutorial && !this.testMode){
            //new PopUp("Choose a container to start");
            this.tutorial = false;
        }
        this.dish = new Dish();
        for(let i = 0; i < this.containers.length; i++){
            const $container = $('<div/>').addClass('ingrediant ingrediant-active');
                  $container.css('background-image',"URL(./images/" + this.containers[i] + ".png)");
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
              $item.css('background-image',"URL(./images/" + ingrediantInfo.imgSelect + ")");
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
            this.displayElements.$activeIngrediants.empty();
            this.dish.clearDish();
            this.displayElements.$nameInput.text("");
            this.displayElements.$priceInput.text("");
            this.dish = null;
        } else {
            new PopUp("Not a valid dish");
        }
    }
    updateProp(propName,propVal){
        console.log("updating prop");
        this.properties[propName] = propVal;
        console.log(this.properties);
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
    updateTableDisplay(){
        console.log("updating table display");
        console.log(this.displayElements.$tablesTotal);
        console.log(this.tables);
        this.displayElements.$tablesTotal.text(this.properties.tables);
        this.displayElements.$tablesFull.text(this.properties.filledTables);
    }
    profit(amt){
        this.properties.profitDaily += Math.floor(amt);
        this.properties.profitTotal += Math.floor(amt);
        this.updateFinanceWindow();
    }
    loss(amt){
        this.properties.profitDaily -= Math.floor(amt);
        this.properties.profitTotal -= Math.floor(amt);
        this.updateFinanceWindow();
    }
    updateFinanceWindow(){
        $('#profit-daily').text("Daily$: " + this.properties.profitDaily);
        $('#profit-total').text("Total$:" + this.properties.profitTotal);
    }
    clearDailyProft(){
        this.properties.profitDaily = 0;
        this.daysInOperation += 1;
        this.updateFinanceWindow();
    }
    showRestuarantBuilder(newGame){
        console.log("showing resturant builder");
        const modal = new RestuarantModal(this,newGame);
    }
    recieveReport(report){
        console.log('resturant recieves:', report);
        for(let i = 0; i < report.dishesEaten.length; i++){
            const profit = report.dishesEaten[i].profit;
            this.profit(profit);
        }
    }
}