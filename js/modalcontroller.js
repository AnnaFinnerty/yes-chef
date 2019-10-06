class ModalController{
    constructor(radio){
        console.log("modal controller running");
        this.radio = radio;
        this.radio.addSubscriber("ModalController",this.recieve.bind(this));
        this.restaurantBuilder = new RestaurantBuilder(this.radio);
        this.restaurantDecorator = new RestuarantDecorator(this.radio);

        this.modalOpen = false;
        this.$activeElement = null;
        this.displayElements = {
            $modal: $(".modal"),
            $popUp: $(".pop-up"),
            $popUpText: $("#pop-up-text"),
            $modalWindow: $(".modal-window"),
        }
        this.requestPaths = {
            openResturantBuilder: this.showWindow.bind(this),
        }
        //this.showPop(null,"test message goes here!");
        this.loadEventListeners();
    }
    loadEventListeners(){
       
        this.displayElements.$modal.on('click',(e)=>{
            if(e.target.className === "modal" || e.target.className === "close-modal-button"){
                this.closeModal();
            }
        })
    }
    showPop(popType,message,buttons){
        //set active element to pop object
        this.$activeElement = this.displayElements.$popUp;
        this.openModal();
        //build pop up and append message
        this.displayElements.$popUp.removeClass("hidden");
        if(popType === "simple" || popType === null)
        {
            this.displayElements.$popUpText.text(message);
        }
        //append any buttons that have been passed to method
        if(buttons && buttons.length){
            for(let i = 0; i< buttons.length;i++){
                this.$activeElement.append(buttons[i]); 
            }
        }
    }
    showWindow(windowName){
        console.log("showing window: " + windowName);
        this.$activeElement = this.displayElements.$modalWindow;
        this.displayElements.$modalWindow.removeClass("hidden");
        if(windowName === "openResturantBuilder"){
            this.restaurantBuilder.openUI();
        }
        this.openModal();
    }
    openModal(){
        console.log("opening modal");
        this.modalOpen = true;
        console.log(this.displayElements.$modal);
        this.displayElements.$modal.removeClass("hidden");
    }
    closeModal(){
        console.log("closing modal");
        //reset the $activeElement(pop up or window) to hidden state
        this.modalOpen = true;
        this.displayElements.$modal.addClass("hidden");
        this.clearContainer(this.$activeElement);
        this.$activeElement.addClass("hidden");
        this.$activeElement.text("");
        this.$activeElement = null;
    }
    clearContainer($container){
        while($container.firstChild){
            $container.removeChild($container.firstChild);
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
            callback(message.command);
        }
    }
}