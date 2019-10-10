class Modal{
    constructor(){
        console.log("modal building");
        this.awake();
    }
    awake(){
        $(".modal").on('click',(e)=>{
            this.close(e);
        })
        this.open();
    }
    open(){
        $(".modal").removeClass('hidden');
    }
    close(e){
        if(e.target.className === "modal" || e.target.className === "close-modal-button"){
            $(".modal").addClass('hidden'); 
            $(".modal").empty();
        }
    }
}

class PopUp extends Modal{
    constructor(text){
        super();
        this.text = text;
        this.buildPop();
    }
    buildPop(){
        console.log("build pop");
        const $pop = $('<div/>').addClass('pop-up');
        const $row = $('<div/>').addClass("row");
        const $closeButton = $('<button>X</button>').addClass('close-modal-button');
              $closeButton.on('click', (e)=>{
                  this.close(e);
              })
              $row.append($closeButton);
              $pop.append($row);
        $pop.append($('<span/>').text(this.text));
        $(".modal").append($pop);
    }
}

class MenuModal extends Modal{
    constructor(restuarant){
        super();
        this.restuarant = restuarant;
        this.menu = this.restuarant.menu;
        this.buildMenu();
    }
    
    buildMenu(){
        console.log("building menu");
        const $menu = $('<div/>').addClass('menu');
        const $row = $('<div/>').addClass("row");
        const $closeButton = $('<button>X</button>').addClass('close-modal-button');
              $closeButton.on('click', (e)=>{
                  this.close(e);
              })
              $row.append($closeButton);
              $menu.append($row);
        $menu.append($('<h2>MENU</h2>'));
        for(let item in this.menu){
            const info = this.menu[item];
            console.log(info);
            const $menuItem = $('<div/>').attr('data-id',this.menu[item].id).addClass("row");
            const $menuItemName = $('<span/>').attr('data-id',this.menu[item].id);
            $menuItemName.text(this.menu[item].name);
            $menuItem.append($menuItemName);
            const price = $('<span/>').text("$" + info.menuPrice);
            $menuItem.append(price);
            const wholesale = $('<span/>').text("(" + info.wholesalePrice + ")");
            $menuItem.append(wholesale );
            $menu.append($menuItem);
        }
        $(".modal").append($menu);
    }
}

class IndustryModal extends Modal{
    constructor(info){
        super();
        this.info = info;
        this.awake();
        this.buildWindow();
    }
    awake(){
        $(".modal").on('click',(e)=>{
            this.close(e);
        })
        this.open();
    }
    buildWindow(){
        console.log("building industry window");
        const $window = $('<div/>').addClass('window');
        $(".modal").append($window);

        const $row = $('<div/>').addClass("row");
        const $closeButton = $('<button>X</button>').addClass('close-modal-button');
              $closeButton.on('click', (e)=>{
                  this.close(e);
              })
              $row.append($closeButton);
              $window.append($row);

        $window.append('<h3>Resturant News Center</h3>')
    }
}

class RestuarantModal extends Modal{
    constructor(styles,info,newGame){
        super();
        this.info = info;
        this.newGame = newGame;
        this.setting = "easy";
        this.settingsDefault = {
            easy: {
                profitDaily: 166,
                profitMonthly: 5000,
                tables: 10
            },
            medium: {
                profitDaily: 100,
                profitMonthly: 3000,
                tables: 7
            },
            hard:{
                profitDaily: 50,
                profitMonthly: 1500,
                tables: 5
            }
        }
        this.awake();
        this.buildWindow();
    }
    awake(){
        $(".modal").on('click',(e)=>{
            this.close(e);
        })
        this.open();
    }
    buildWindow(){
        console.log("building resturant window");
        const $window = $('<div/>').addClass('window');
        $(".modal").append($window);

        const $row = $('<div/>').addClass("row");
        const $closeButton = $('<button>X</button>').addClass('close-modal-button');
              $closeButton.on('click', (e)=>{
                  this.close(e);
              })
              $row.append($closeButton);
              $window.append($row);

        $window.append('<h3>Restuarant Builder</h3>')

         if(this.newGame){
             this.newResturantUI();
         }
        this.newResturantUI($window);

        console.log(this.info);
        const $stars = $('<h3/>').text("***");    
        $window.append($stars);

        const $name = $('<h3/>').text("Name:");
        const $nameInput = $('<input type="text">').attr('data-id','name');
        $name.append($nameInput);
        $window.append($name);

        
        const $style = ($('<span>Style:</span>'));
        const $styleInput = $('<select/>');
        $style.append($styleInput);
        $window.append($style);

        const $open = $('<span>Open:</span>');
        const $openInput = $('<input type="text"/>');
        $open.append($openInput); 
        $window.append($open);

        const $close = $('<span>Close:</span>');
        const $closeInput = $('<input type="text"/>'); 
        $close.append($closeInput);
        $window.append($close);

        for(let i = 0; i < this.info.styles.length;i++){
            const $option = $('<option/>').attr('data-id',this.info.styles[i]);
                  $option.text(this.info.styles[i]);
            $styleInput.append($option);
        }
        
        const $tables = $('<h3/>').text("Tables:"+this.info.properties.tables);
        //add buttons to add/decrease tables
        $window.append($tables);

        const $waitstaff = $('<h3/>').text("Waitstaff:"+this.info.properties.waitstaff);
        $window.append($waitstaff);

        const $save = $('<button/>').text("SAVE");
        $save.on('click',()=>this.saveState());
    }
    newResturantUI($window){
        console.log(this.info);
        const $settingsContainer = $('<div/>');
        $window.append($settingsContainer);
        this.buildSettingsUI($settingsContainer);
    }
    buildSettingsUI($settingsContainer){
        const modeInfo = this.settingsDefault[this.setting];
        console.log(modeInfo);
        console.log(this.settingsDefault);
        console.log(this.setting);
        const $financeRow = $('<div/>').addClass('row');
        const $profitDaily = $('<span/>').text('Daily profit:' + modeInfo.profitDaily);
              $financeRow.append($profitDaily);
        const $profitTotal = $('<span/>').text('Total profit:' + modeInfo.profitTotal);
              $financeRow.append($profitTotal);
        $settingsContainer.append($financeRow);

        const modes = ['easy','medium','hard'];
        const $modeRow = $('<div/>').addClass('row');
        for(let i = 0; i < modes.length; i++){
            const $modeButton = $('<button/>').text(modes[i]);
            $modeRow.append($modeButton);
        }
        $settingsContainer.append($modeRow);
        
    }
}