class UIController{
    constructor(radio){
        console.log("ui controller running");
        this.radio = radio;
        this.radio.addSubscriber("UIController",this.recieve);
        this.modalController = new ModalController();
        this.displayElements = {
            $modal: $("#modal"),
            $popUp: $("#pop-up"),
            $profitDisplay: $("#profit-display"),
            $tablesDisplay: $("#tables-display"),
            $modalWindow: $("#modal-window"),
            $starsDisplay: $("#stars-display"),
            $reviewSidebar: $("#review-sidebar"),
            $latestReviewsDisplay: $("#latest-reviews-display"),
            $ingrediantsSidebar: $("#ingrediants-sidebar"),
            $ingrediantsSelector: $("#ingrediants-selector"),
            $ingrediantsTabs: $("#ingrediants-tabs"),
            $industryDropdown: $("#industry-dropdown"),
            $menuDropdown: $("#menu-dropdown"),
        }
        console.log(this.displayElements);
        //tracks whether collapsable elements are open or closed
        this.collapseTracker = {
            reviewSidebar: false,
            ingrediantsSidebar: false,
        }
    }
    loadEventListeners(){
        
    }
    toggleCollapse(elementId){

    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}
