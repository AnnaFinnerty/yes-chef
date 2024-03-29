class Reviews{
    constructor(radio){
        console.log("Reviews running");
        this.radio = radio;
        //this.radio.addSubscriber("ReviewSidebar",this.recieve.bind(this));
        this.recentReviews = [];
        this.stars = 3.5;
        this.displayElements = {
            $reviewSidebar: $("#reviews-sidebar"),
            $starsDisplay: $("#stars-display"),
            $latestReviewsDisplay: $("#latest-reviews-display"),
        }
        this.awake();
    }
    awake(){
        this.displayElements.$reviewSidebar.on('click',()=>{
            this.showReviewModal();
        })
    }
    updateStars(stars){
        this.stars = stars
    }
    updateReviews(){
        //keep removing older reviews
        if(this.recentReviews.length > 20){
            this.recentReviews.splice(19,this.recentReviews.length-19);
        }
        for(let i = 0; i < this.recentReviews.length; i++){
            const $review = this.recentReviews[i];
            this.displayElements.$latestReviewsDisplay.append($review);
        }
    }
    addReview(review){
        console.log(review);
        const $review = $('<div/>').addClass('review-container');
              $review.append($('<span/>').text(review.text));
              $review.append($('<span/>').text('--' + review.name));
            let stars = "";
            for(let i = 0; i < review.rating; i++){
                stars += "*";
            }
            const $stars = $('<span/>').addClass('stars').text(stars);
            $review.append($stars);
        this.recentReviews.splice(0,0,$review);
        this.updateReviews();
    }
    showReviewModal(){
        console.log("showing review modal!");
        new ReviewModal(this.recentReviews);
    }
}