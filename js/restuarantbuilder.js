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
            profitDaily: 0,
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
            profitDaily: 50,
            rating: 3.5,
            incomeHistoryDaily: [],
            incomeHistoryMonthly: []
        }
        console.log(this.window)
        this.addEventListeners();
    }
    addEventListeners(){
        //this.$window.on('click',this.storeProperty.bind(this));
    }
    openUI(resturantProperties){
        //if properties are passed in, we will work with them. Otherwise we'll start a new resturant with default properties
        this.$window.append('<h3>Restuarant Builder</h3>')
        const $name = this.makejQueryElement(this.$window,'span','Name:');
        const $nameInput = $('<input type="text">').attr('data-id','name');
        $name.append($nameInput);

        const $style = this.makejQueryElement(this.$window,'span','Style:');
        const $styleInput = this.makejQueryElement($style,'select',null,'data-id','style');
        for(let i = 0; i < this.styles.length;i++){
            this.makejQueryElement($styleInput,'option',this.styles[i],'data-id','style');
        }
        
        const $tables = this.makejQueryElement(this.$window,'span','Tables:');
        const $tablesInput = $('<input type="text">').attr('data-id','tables');
        $tables.append($tablesInput);
        
        const $waitstaff = this.makejQueryElement(this.$window,'span','Waitstaff:');
        const $waitstaffInput = $('<input type="text">').attr('data-id','waitstaff');
        $waitstaff.append($waitstaffInput);

        const $save = this.makejQueryElement(this.$window,'button','save');
        $save.on('click',()=>this.saveState())

    }
    newResturantUI(){
        this.properties = !resturantProperties ? this.defaultProperties : resturantProperties;
        
        const $financeRow = this.makejQueryElement(this.$window,'span',null,'row');
        const $profitTotal = this.makejQueryElement($financeRow,'span','total profit:');
        this.makejQueryElement($profitTotal,'span',this.properties.profitTotal);
        const $profitDaily = this.makejQueryElement($financeRow,'span','daily profit:');
        this.makejQueryElement($profitMonth,'span',this.properties.profitDaily);

        const modes = ['easy','medium','hard'];
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
    storeProperty(e){
        console.log(this);
        const property = $(e.target).attr('data-id');
        if(property){
            console.log("storing property")
            console.log(e.target.id);
            console.log(this.properties);
            if(this.properties[property]){
                this.properties[property] = $(e.target).val();
                console.log(this.properties);
            }
        }
    }
    saveState(){
        console.log("saving state");
    }
    recieve(message,print){
        if(print){
            console.log("Game recieves:");
            console.log(message);
        }
    }
}