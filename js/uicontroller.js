class UIController{
    constructor(radio){
        console.log("ui controller running");
        this.radio = radio;
        this.radio.addSubscriber("UIController",this.recieve.bind(this));
        this.modalController = new ModalController(this.radio);
        this.header = new Header(this.radio);
        this.ingrediantsSidebar = new IngrediantSidebar(this.radio);
        this.reviewSidebar = new ReviewSidebar(this.radio);
        this.viewWindow = new ViewWindow(this.radio);
        //tracks whether collapsable elements are open or closed
        this.collapseTracker = {
            reviewSidebar: {showing: true},
            ingrediantsSidebar: {showing: true},
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
    }
}
