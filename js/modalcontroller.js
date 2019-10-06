class ModalController{
    constructor(radio){
        console.log("modal controller running");
        this.radio = radio;
        this.modalOpen = false;
        this.$activeElement = null;
        this.displayElements = {
            $modal: $("#modal"),
            $popUpText: $("#pop-up-text"),
            $modalWindow: $("#modal-window"),
        }
        this.showPop(null,"test message goes here!");
        this.loadEventListeners();
    }
    loadEventListeners(){

    }
    showPop(popType,message,buttons){
        //set active element to pop object
        this.$activeElement = this.displayElements.$popUpText;
        this.openModal();
        //build pop up and append message
        if(popType === "simple" || popType === null)
        {
            const text = $('<span/>').text(message);
            this.$activeElement.append(text);
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
        this.openModal();
    }
    openModal(){
        console.log("opening modal");
        this.modalOpen = true;
        this.displayElements.$modal.removeClass("hidden");
    }
    closeModal(){
        console.log("closing modal");
        this.modalOpen = true;
        this.displayElements.$modal.removeClass("hidden");
        this.clearContainer(this.activeElement);
        this.$activeElement = null;
    }
    clearContainer($container){
        while($container.firstChild){
            $container.removeChild($container.firstChild);
        }
    }
}