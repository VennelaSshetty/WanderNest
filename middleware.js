const Listing=require("./models/listing.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/review.js");

module.exports.isLoggedIn=(req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You haven't logged in yet..login to access wanderlust");
        return res.redirect("/login");
     }
     next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
      res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
   let {id}=req.params;
   let listing=await Listing.findById(id);
   if(!listing.owner.equals(res.locals.currUser._id)){
     req.flash("error","You don't have access to this listing");
     return res.redirect(`/listings/${id}`);
   }
   next();
}

module.exports.ValidateListing=(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
  if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else{
    next();
  }
}

module.exports.ValidateReview=(req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
  if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }else{
    next();
  }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
   let {id,reviewId}=req.params;
   let review=await Review.findById(reviewId);
   if(!res.locals.currUser){
    req.flash("error","You haven't logged in yet...log in to use wanderlust");
    return res.redirect("/login");
   }
   if(!review.author.equals(res.locals.currUser._id)){
     req.flash("error","Only the author of this review has access");
     return res.redirect(`/listings/${id}`);
   }
   next();
}

