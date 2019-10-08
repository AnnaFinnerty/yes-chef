class Header{
    constructor(radio){
        console.log("header running");
        this.radio = radio;
        this.radio.addSubscriber("Header",this.recieve.bind(this));
        this.displayElements = {
            $profitDisplay: $("#profit-display"),
            $tablesDisplay: $("#tables-display"),
            $industryDropdown: $("#industry-dropdown"),
            $menuDropdown: $("#menu-dropdown"),
            $dateHour: $('#date-hour'),
            $dateDay: $('#date-day'),
            $dateMonth: $('#date-month'),
            $dateYear: $('#date-year'),
        }
        this.awake();
    }
    awake(){
        this.radio.subscribeToEvent("updateTime",this.recieve.bind(this));
        this.displayElements.$profitDisplay.on('click',()=> {
            // not working now that header is moved!
            //this.modalController.showWindow("financeWindow");
        })
    }
    updateDisplay(elementName,value){
        //console.log(value);
        //console.log(elementName);
        if(this.displayElements[elementName]){
            //console.log(this.displayElements[elementName]);
            this.displayElements[elementName].text(value);
        } else {
            console.log("UIError: display element " + elementName + " not found");
        }
    }
    recieve(message,print){
        if(print){
            console.log("Header recieves:");
            console.log(message);
        }
        
        if(message.command === "updateTime"){
            this.updateDisplay("$dateHour",message.data.hour);
            this.updateDisplay("$dateDay",message.data.day);
        }
    }
}