class RestaurantBuilder{
    constructor(radio){
        this.radio = radio;
        this.radio.addSubscriber("ResturantBuilder",this.recieve.bind(this));
        this.$window = $('#modal-window-text');
        //active properties the form is working with
        this.properties = null;
        //different available resturant styles
        this.styles = ['cafe','fast food', 'bistro', 'high end'];
        this.customProperties = {
            name: "",
            style: "",
            tables: 0,
            waitstaff: 0,
            profitTotal: 0,
            profitMonth: 0,
            rating: 0,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        this.defaultProperties = {
            name: "",
            style: "cafe",
            tables: 5,
            waitstaff: 2,
            profitTotal: 5000,
            profitMonth: 500,
            rating: 3.5,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        console.log(this.window)
    }
    openUI(resturantProperties){
        //if properties are passed in, we will work with them. Otherwise we'll start a new resturant with default properties
        this.properties = !resturantProperties ? this.defaultProperties : resturantProperties;
        this.$window.append('<h3>Restuarant Builder</h3>')
        const $name = this.makejQueryElement(this.$window,'span','Name:');
        const $nameInput = $('<input type="text">').attr('data-id','name');
        $name.append($nameInput);
        const $style = this.makejQueryElement(this.$window,'span','Style:');
        const $styleInput = this.makejQueryElement($style,'select',null,'data-id','style');
        for(let i = 0; i < this.styles.length;i++){
            const $styleOption = this.makejQueryElement($styleInput,'option',this.styles.length[i],'data-id',this.styles.length[i]);
        }
        this.$window.append($style);
    }
    makejQueryElement($parent,type,text,className,attrName,attrVal){
        const $element = $('<'+type+'>');
        if(text){
            $element.text(text);
        }
        if(className){
            $element.addClass(className);
        }
        if(attrName && attrVal){
            $element.attr(attrName,attrVal);
        }
        if(parent){
            $parent.append($element);
        }
        return $element
    }
    storeProperty(){

    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}