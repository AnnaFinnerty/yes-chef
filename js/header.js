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
            $dateDay: $('date-day'),
            $dateMonth: $('date-month'),
            $dateYear: $('date-year'),
        }
        this.loadEventListeners();
    }
    loadEventListeners(){
        this.displayElements.$profitDisplay.on('click',()=> {
            this.modalController.showWindow("financeWindow");
        })
    }
    updateDisplay(elementName,value){
        if(this.displayElements[elementName]){
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
    }
}