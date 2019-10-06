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
        }
        this.requestPaths = {
            openResturantBuilder: this.modalController.showWindow,
        }
        //tracks whether collapsable elements are open or closed
        this.collapseTracker = {
            reviewSidebar: {showing: true},
            ingrediantsSidebar: {showing: true},
        }
        this.doSomething = $.proxy( this.recieve, this );
        //this.recieve = this.recieve.bind(this);
        console.log(this.recieve);
        this.loadEventListeners();
    }
    loadEventListeners(){
        this.displayElements.$profitDisplay.on('click',()=>{
            this.modalController.showWindow("finance-window");
        })
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
        console.log(this);
        console.log(this.requestPaths);
        if(this.requestPaths[message.command]){
            const callback = this.requestPaths[message.command];
            callback(message);
        }
    }
}
