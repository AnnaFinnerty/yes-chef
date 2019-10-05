class Radio{
    constructor(){
        console.log("radio running");
        this.subscribers = {};
        this.events = {};
        this.printMessage = true;
        this.blockedEvents = [];
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
    addEvent(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName] = {
                callback: callback,
                subcribers: [],
            };
            console.log("event added");
            console.log(this.events);
        }
    }
    subscribeToEvent(eventName,subscriberCallback){
        if(!this.events[eventName]){
            console.log(subscriberCallback, "subscription to " + eventName + " failed");
        } else {
            this.events[eventName].subcribers.push(subscriberCallback);
        }
    }
}