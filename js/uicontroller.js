class UIController{
    constructor(){
        console.log("ui controller running");
        this.displayElements = {
            $modal: $("#modal"),
            $popUp: $("#pop-up"),
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
}