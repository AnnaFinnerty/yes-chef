class DialogueGen{
    constructor(){
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
            console.log("request failed. Type:" + request.type);
        }
    }
    suggestRestuarantName(){

    }
}

