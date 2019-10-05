class Radio{
    constructor(){
        this.subscribers = {}
    }
    addSubscriber(subcriberName, subscriberCallback){
        //add a subcriber to list of subscribers
        if(!this.subscribers[subcriberName]){
            this.subscribers[subcriberName] = subscriberCallback;
        }
    }
    callSubcriber(subcriberName,message){
        //sends a message to a subscriber
        const callback = this.subscribers[subcriberName];
        callback(message);
    }
}