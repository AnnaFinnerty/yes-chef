class ModalController{
    constructor(radio){
        console.log("modal controller running");
        this.radio = radio;
        this.modalOpen = false;
        this.$activeElement = null;
        this.displayElements = {
            $modal: $("#modal"),
            $popUp: $("#pop-up"),
            $modalWindow: $("#modal-window"),
        }
        this.showPop(null,"test message goes here!");
    }
    showPop(popType,message,buttons){
        this.$activeElement = this.displayElements.$popUp;
        this.openModal();
        if(popType === "simple" || popType === null)
        {
            const text = $('<span/>').text(message);
            this.$activeElement.append(text);
        }
        if(buttons.length){
            for(let i = 0; i< buttons.length;i++){
                this.$activeElement.append(buttons[i]); 
            }
        }
    }
    showWindow(){
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