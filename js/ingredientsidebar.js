class IngrediantSidebar{
    constructor(){
        console.log("header running");
        this.ingrediantTabs = {
            active: null,
            container: this.displayElements.$ingrediantsTabs,
            elements: null,
            elementStyle: "ingrediants-tab",
            data: null,
            dataLoc: "Ingrediants",
            dataCommand: "returnIngrediantCategories",
        }
    }
    updateTabs(selectedPosition = 0){
        console.log(tabsName);
        if(this.tabsTracker[tabsName]){
            if(this.tabsTracker[tabsName]['active'] === null){
                //request tab info if not already loaded
                this.radio.callSubscriber(this.tabsTracker[tabsName]['dataLoc'],{command:this.tabsTracker[tabsName]['dataCommand'],return:"UIController"});
            } else {
                console.log("time to make tabs!");
                if(this.tabsTracker[tabsName]['elements'] === null){
                    //if tab elements are not built, build and store them
                    const tab = $('<div/>');
                } else {

                }
            }
        }
    }
}