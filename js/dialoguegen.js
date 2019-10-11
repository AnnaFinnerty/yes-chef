class DialogueGenerator{
    constructor(){
        this.requestPaths = {
            "suggestRestuarantName": this.suggestRestuarantName,
        }
    }
    
    suggestRestuarantName(){
        const firstWord = this.randomFromArray(restuarantName1);
        const secondWord = this.randomFromArray(restuarantName2);
        return firstWord + " " + secondWord
    }
    reviewGen(resturantName, visitorName, rating, dish){
        console.log(rating);
        const isPositive = rating <= 3;
        const decorAdj = isPositive ? this.randomFromArray(posDecorAdjectives) : this.randomFromArray(negDecorAdjectives);
        const foodAdj1 = isPositive ? this.randomFromArray(posFoodAdjectives) : this.randomFromArray(negFoodAdjectives);
        const foodAdj2 = isPositive ? this.randomFromArray(posDecorAdjectives) : this.randomFromArray(negDecorAdjectives);

        const positiveReviews = [
            "" + resturantName + " is a " + decorAdj + " resturant with " + foodAdj1 + " food. We had a wondeful time.",
            "Had a great meal at " + resturantName + ". My " + dish + " was " + foodAdj1 + ", althought the decor is a little " + decorAdj + ".",
            "" + resturantName + " is " + foodAdj1 + ", " + foodAdj2 + ", and " + decorAdj + ". We hope to come back soon"
        ]
        
        const negativeReviews = [
            "" + resturantName + " is a " + decorAdj + " resturant with " + foodAdj1 + " food.",
            "Terrible meal at " + resturantName + ". My " + dish + " was " + foodAdj1 + ", and the whole place is " + decorAdj + ".",
            "" + resturantName + " is " + foodAdj1 + ", " + foodAdj2 + ", and " + decorAdj + ". Never coming back again!"        
        ]
        
        const returningReviews = [
            "" + resturantName + " has always been a " + decorAdj + " resturant with " + foodAdj1 + " food. We eat here all the time!",
            "Had a great meal at " + resturantName + ". My " + dish + " was " + foodAdj1 + ", as always.",
            "" + resturantName + " is " + foodAdj1 + ", " + foodAdj2 + ", and " + decorAdj + ". We'll be back soon!"        
        ]

        const review = isPositive ? this.randomFromArray(positiveReviews) : this.randomFromArray(negativeReviews);
        return review

    }
    professionalReviewGen(){

    }

    randomFromArray(arr){
        const r = Math.floor(Math.random()*arr.length);
        return arr[r];
    }
}

const restuarantName1 = ["Happy", "Wholesome", "Discount", "Fresh"];
const restuarantName2 = ["Shack", "Cafe", "Bistro", "Resturant"];

const posDecorAdjectives = ["quaint","comfortable", "well-appointed", "gorgeous","lavish","ravishing"]
const negDecorAdjectives = ["repugnant","homley"]
const posFoodAdjectives = ["well-proportioned", "tasty", "satisfying", "mouth-watering", "delicious", "scrumptious"]      
const negFoodAdjectives = ["disgusting", "swallowable"]      


