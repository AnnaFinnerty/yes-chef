class IngrediantSidebar{
    constructor(radio){
        console.log("IngrediantSiderbar running");
        this.radio = radio;
        this.radio.addSubscriber("IngrediantSidebar",this.recieve.bind(this));
        this.displayElements = {
            $ingrediantsSidebar: $("#ingrediants-sidebar"),
            $ingrediantsSelector: $("#ingrediants-selector"),
            $ingrediantsTabs: $("#ingrediants-tabs"),
        }
        this.ingrediantTabs = {
            active: null,
            container: this.displayElements.$ingrediantsTabs,
            elements: null,
            elementStyle: "ingrediants-tab",
            data: null,
            dataLoc: "Ingrediants",
            dataCommand: "returnIngrediantCategories",
        }
        this.updateTabs();
    }
    updateTabs(selectedPosition = 0){
        if(this.ingrediantTabs.active === null){
            this.radio.callSubscriber(this.ingrediantTabs['dataLoc'],{command:this.ingrediantTabs.dataCommand,return:"IngrediantSidebar"});
        } else {
            if(this.ingrediantTabs['elements'] === null){
                console.log("time to make tabs");
                console.log(this.ingrediantTabs.data);
                this.ingrediantTabs['elements'] = [];
                //if tab elements are not built, build and store them
                for(let i = 0; i < this.ingrediantTabs.data.length; i++){
                    console.log(this.ingrediantTabs.data[i]);
                    const $tab = $('<div/>').attr('data-id',this.ingrediantTabs.data[i]);
                    if(i === this.ingrediantTabs.active){
                        $tab.addClass("ingrediant-tab selected");
                        this.radio.callSubscriber('Ingrediants',{command:"returnCategoryList",data: this.ingrediantTabs.data[i],return:"IngrediantSidebar"})
                    } else {
                        $tab.addClass("ingrediant-tab");
                    }  
                        $tab.text(this.ingrediantTabs.data[i]);
                    this.displayElements.$ingrediantsTabs.append($tab);
                    this.ingrediantTabs['elements'].push($tab);
                }
            } else {
                console.log("time to update tabs");
                
            }
        }
    }
    loadIngrediantList(){
        console.log("loading ingrediant list");
    }
    recieve(message,print){
        if(print){
            console.log("IngrediantSidebar recieves:");
            console.log(message);
        }
        if(message.command === "returnIngrediantCategories"){
            this.ingrediantTabs.data = message.info;
            this.ingrediantTabs.active = 0;
            this.updateTabs("ingrediantTabs");
        }
    }
}