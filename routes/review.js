const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,ValidateReview,isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/review.js");

//reviews - Post route
router.post("/",isLoggedIn,ValidateReview,wrapAsync(reviewController.createReview));

router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;
