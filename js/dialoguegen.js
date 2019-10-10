class DialogueGenerator{
    constructor(){
        this.requestPaths = {
            "suggestRestuarantName": this.suggestRestuarantName,
        }
    }
    
    suggestRestuarantName(){
        
    }
    reviewGen(resturantName, visitorName, rating, dish){
        const isPositive = rating >= 3;
        
        const positiveReviews = [
            "" + resturantName + " is a " 
        ]
        
        const negativeReviews = [
                    
        ]
        
        const returningReviews = [
                    
        ]


    }
    randomFromArrayBetween(arr){
        const r = Math.floor(Math.random()*arr.length);
        return arr[r];
    }
}




const adjectives = ["repugnant","homley","quaint","comfortable", "well-appointed", "gorgeous","lavish","ravishing"]
const foodAdjectives = ["disgusting", "swallowable", "well-proportioned", "tasty", "satisfying", "mouth-watering", "delicious", "scrumptious"]      


