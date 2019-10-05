class DialogueGenerator{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("DialogueGenerator",this.recieve);
        this.requestPaths = {
            "suggestRestuarantName": this.suggestRestuarantName,
        }
    }
    recieve(request,print){
        if(print){
            console.log("DialogueGen recieves:");
            console.log(message);
        }
        if(this.requestPaths[request.type]){

        } else {
            console.log("DialogueGenError: request failelure for type:" + request.type);
        }
    }
    suggestRestuarantName(){

    }
}

