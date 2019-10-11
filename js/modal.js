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
            const $menuItem = $('<div/>').attr('data-id',this.menu[item].id).addClass("row");
            const $menuItemName = $('<span/>').attr('data-id',this.menu[item].id);
            $menuItemName.text(this.menu[item].name);
            $menuItem.append($menuItemName);
            const price = $('<span/>').text("$" + info.menuPrice);
            $menuItem.append(price);
            const wholesale = $('<span/>').text("(" + info.wholesalePrice + ")");
            $menuItem.append(wholesale );
            const removeButton = $('<button>X</button>');
                  removeButton.on('click',()=>{
                      console.log(this.restuarant);
                      this.menu.removeDish(this.menu[item].id);
                  })
            $menuItem.append(removeButton);

            $menu.append($menuItem);
        }
        $(".modal").append($menu);
    }
}

class ReviewModal extends Modal{
    constructor(reviews,stars){
        super();
        this.stars = stars;
        this.reviews = reviews;
        this.buildReviews();
    }
    
    buildReviews(){
        console.log("building reviews");
        const $window = $('<div/>').addClass('review-window');
        const $row = $('<div/>').addClass("row");
        const $closeButton = $('<button>X</button>').addClass('close-modal-button');
              $closeButton.on('click', (e)=>{
                  this.close(e);
              })
              $row.append($closeButton);
              $window.append($row);
        $window.append($('<h2>REVIEWS</h2>'));
        for(let i = 0; i < this.reviews.length; i++){
            const review = this.reviews[i];
            const $review = $('<div/>').addClass('review-container');
            $review.append($('<span/>').text(review.text));
        }
        $(".modal").append($window);
    }
}

class IndustryModal extends Modal{
    constructor(industry){
        super();
        this.industry = industry;
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
        console.log(this.industry);
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
        $window.append('<h4>Industry Averages</h4>') 
        for(let i in this.industry.industryAverages){
            console.log(i);
            const $stat = $('<span/>').text(i + ": " + this.industry.industryAverages[i]);
            $window.append($stat);
        }

        $window.append('<h4>Competitors</h4>')
        for(let i = 0; i < this.industry.competitors.length; i++){
            const competitorInfo = this.industry.competitors[i].properties;
            const $competitor = $('<span/>').text(competitorInfo.name);
                  $competitor.append($('<span/>').text(competitorInfo.rating))
            $window.append($competitor);
        }
    }
}

class RestuarantModal extends Modal{
    constructor(restuarant,newGame){
        super();
        this.restuarant = restuarant;
        this.styles = restuarant.styles;
        this.newGame = newGame;
        this.setting = "easy";
        this.$window = null;
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
        console.log(this.restuarant);
        const $window = $('<div/>').addClass('window');
        $(".modal").append($window);

        $window.on('click',(e)=>{
            const tag = e.target.getAttribute('data-class');
            console.log(tag);
            this.restuarant.updateProp();
        })
        
        //store window object to be accessed by other properties
        this.$window = $window;

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

        const $stars = $('<h3/>').text("***");    
        $window.append($stars);

        const $name = $('<h3/>').text("Name:");
        const $nameInput = $('<input type="text">').attr('data-class','prop').attr('data-id','name');
              $nameInput.attr('placeholder',this.restuarant.properties.name);
        $name.append($nameInput);
        $window.append($name);

        
        const $style = ($('<span>Style:</span>'));
        const $styleInput = $('<select/>').attr('data-class','prop').attr('data-id','style');
        $style.append($styleInput);
        $window.append($style);

        for(let i = 0; i < this.styles.length;i++){
            const $option = $('<option/>').attr('data-id',this.styles[i]);
                  $option.text(this.styles[i]);
            $styleInput.append($option);
        }

        const $open = $('<span>Open:</span>');
        const $openInput = $('<input type="text"/>').attr('data-class','prop').attr('data-id','openHour');
              $openInput.attr('placeholder',this.restuarant.properties.openHour);
        $open.append($openInput); 
        $window.append($open);

        const $close = $('<span>Close:</span>');
        const $closeInput = $('<input type="text"/>').attr('data-class','prop').attr('data-id','closeHour');
              $closeInput.attr('placeholder',this.restuarant.properties.closeHour);
        $close.append($closeInput);
        $window.append($close);
        
        const $tables = $('<h3/>').text("Tables:");
        const $tablesInput = $('<input type="text"/>').attr('data-class','prop').attr('data-id','tables');
        $tablesInput.attr('placeholder',this.restuarant.properties.tables);
        $tables.append($tablesInput);
        $window.append($tables);

        const $waitstaff = $('<h3/>').text("Waitstaff:"+this.restuarant.properties.waitstaff);
        const $waitstaffInput = $('<input type="text"/>').attr('data-class','prop').attr('data-id','waitstaff');
              $waitstaffInput.attr('placeholder',this.restuarant.properties.waitstaff);
        $waitstaff.append($waitstaffInput);
        $window.append($waitstaff);

        // const $save = $('<button/>').text("SAVE");
        // $save.on('click',()=>this.saveState());
    }
    newResturantUI($window){
        console.log(this.info);
        const $settingsContainer = $('<div/>');
        this.$window.append($settingsContainer);
        this.buildSettingsUI($settingsContainer);
    }
    buildSettingsUI($settingsContainer){
        const modeInfo = this.settingsDefault[this.setting];
        const $financeRow = $('<div/>').addClass('row center-flex');
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