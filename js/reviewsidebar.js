class ReviewSidebar{
    constructor(radio){
        console.log("ReviewSidebar running");
        this.radio = radio;
        this.radio.addSubscriber("ReviewSidebar",this.recieve.bind(this));
        this.recentReviews = [];
        this.stars = 3.5;
        this.displayElements = {
            $reviewSidebar: $("#review-sidebar"),
            $starsDisplay: $("#stars-display"),
            $latestReviewsDisplay: $("#latest-reviews-display"),
        }
    }
    updateStars(stars){
        this.stars = stars;
    }
    updateReviews(){
        for(let i = 0; i < this.recentReviews.length; i++){
            //add date check

        }
    }
    addReview(review){
        this.recentReviews.push(review);
    }
    makeReview(review){
        console.log("making review");
    }
    recieve(message,print){
        if(print){
            console.log("ReviewSidebar recieves:");
            console.log(message);
        }
    }
}