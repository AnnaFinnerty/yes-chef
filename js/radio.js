class Radio{
    constructor(){
        console.log("radio running");
        this.subscribers = {};
        this.events = {};
        this.retainedEvents = ["newGame"];
        this.printMessage = true;
        this.blockedEvents = ["updateTime"];
        this.addEvent("updateTime");
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
        const print = this.blockedEvents.indexOf(message.command) < 0 ? true: false;
        if(this.subscribers[subcriberName]){
            console.log("subscriber name: " + subcriberName );
            const callback = this.subscribers[subcriberName];
            callback(message,print);
        } else {
            console.log("callSubscriberError: subscriber " + subcriberName + " not found");
        }
    }
    addEvent(eventName){
        if(!this.events[eventName]){
            this.events[eventName] = {
                subscribers: [],
            };
            console.log("event added: " + eventName);
            console.log(this.events);
        }
    }
    subscribeToEvent(eventName,subscriberCallback){
        if(!this.events[eventName]){
            console.log(subscriberCallback, "subscription to " + eventName + " failed");
        } else {
            this.events[eventName].subscribers.push(subscriberCallback);
        }
    }
    notifyEventSubcribers(eventName,data){
        if(this.events[eventName]){
            const subscribers = this.events[eventName]['subscribers'];
            for(let i = 0; i < subscribers.length; i++){
                const callback = subscribers[i];
                const print = this.blockedEvents.indexOf(eventName) < 0 ? true: false;
                callback({command:eventName,data:data},print);
            }
        } else {
            console.log("notifySubscriberError: event " + eventName + " not found");
        }
    }
    resetRadio(){
        for(let event in this.events){
            console.log(this.retainedEvents.includes(event));
        }
    }
}