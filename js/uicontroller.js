class UIController{
    constructor(radio){
        console.log("ui controller running");
        this.radio = radio;
        this.radio.addSubscriber("UIController",this.recieve.bind(this));
        this.modalController = new ModalController(this.radio);
        this.displayElements = {
            $profitDisplay: $("#profit-display"),
            $tablesDisplay: $("#tables-display"),
            $starsDisplay: $("#stars-display"),
            $reviewSidebar: $("#review-sidebar"),
            $latestReviewsDisplay: $("#latest-reviews-display"),
            $ingrediantsSidebar: $("#ingrediants-sidebar"),
            $ingrediantsSelector: $("#ingrediants-selector"),
            $ingrediantsTabs: $("#ingrediants-tabs"),
            $industryDropdown: $("#industry-dropdown"),
            $menuDropdown: $("#menu-dropdown"),
            $dateDay: $('date-day'),
            $dateMonth: $('date-month'),
            $dateYear: $('date-year'),
        }
        //tracks whether collapsable elements are open or closed
        this.collapseTracker = {
            reviewSidebar: {showing: true},
            ingrediantsSidebar: {showing: true},
        }
        this.tabsTracker = {
            ingrediantTabs: {
                active: null,
                container: this.displayElements.$ingrediantsTabs,
                elements: null,
                elementStyle: "ingrediants-tab",
                data: null,
                dataLoc: "Ingrediants",
                dataCommand: "returnIngrediantCategories",
            }
        }
        this.loadEventListeners();
        this.updateTabs();
    }
    loadEventListeners(){
        this.displayElements.$profitDisplay.on('click',()=>{
            this.modalController.showWindow("financeWindow");
        })
        for(let i in this.tabsTracker){
            console.log(i);
            this.updateTabs(i);
        }
    }
    updateTabs(tabsName,selectedPosition){
        console.log(tabsName);
        if(this.tabsTracker[tabsName]){
            if(this.tabsTracker[tabsName]['active'] === null){
                //request tab info if not already loaded
                this.radio.callSubscriber(this.tabsTracker[tabsName]['dataLoc'],{command:this.tabsTracker[tabsName]['dataCommand'],return:"UIController"});
            } else {
                console.log("time to make tabs!");
                if(this.tabsTracker[tabsName]['elements'] === null){
                    //if tab elements are not built, build and store them
                    const tab = $('<div/>');
                } else {

                }
            }
        }
    }
    updateDisplay(elementName,value){
        if(this.displayElements[elementName]){
            this.displayElements[elementName].text(value);
        } else {
            console.log("UIError: display element " + elementName + " not found");
        }
    }
    toggleCollapse(elementId){
        if(this.collapseTracker[elementId]){
            this.collapseTracker[elementId]['showing'] = !this.collapseTracker[elementId]['showing'];
            console.log(elementId + " is turned on: " + this.collapseTracker[elementId]['showing']);
        } else {
            console.log("UIControllerError: collapse tracker couldn't find " + elementId);
        }
    }
    recieve(message,print){
        if(print){
            console.log("UIController recieves:");
            console.log(message);
        }
        if(message.command === "returnIngrediantCategories"){
            this.tabsTracker.ingrediantTabs.data = message.info;
            this.tabsTracker.ingrediantTabs.active = 0;
            this.updateTabs("ingrediantTabs");
        }
        console.log(this.tabsTracker);
    }
}
