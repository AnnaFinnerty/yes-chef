class Radio{
    constructor(){
        console.log("radio running");
        this.subscribers = {};
        this.events = {};
        this.retainedEvents = ["newGame"];
        this.printMessage = true;
        this.blockedEvents = [];
    }
    addSubscriber(subcriberName, subscriberCallback){
        //add a subcriber to list of subscribers
        if(!this.subscribers[subcriberName]){
            this.subscribers[subcriberName] = subscriberCallback;
        }
        //console.log(this.subscribers);
    }
    callSubscriber(subcriberName,message){
        //sends a message to a subscriber
        console.log("calling subscriber");
        if(this.subscribers[subcriberName]){
            console.log("subscriber name: " + subcriberName );
            const callback = this.subscribers[subcriberName];
            callback(message,this.printMessage);
        } else {
            console.log("callSubscriberError: subscriber " + subcriberName + " not found");
        }
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
    resetRadio(){
        for(let event in this.events){
            console.log(this.retainedEvents.includes(event));
        }
    }
}