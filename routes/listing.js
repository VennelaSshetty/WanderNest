const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,ValidateListing}=require("../middleware.js");
const multer  = require('multer')
const {storage}=require("../cloudConfig");
const upload = multer({storage});

const listingController=require("../controllers/listing.js");

//index route
//Create route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn,ValidateListing,upload.single("listing[image]"),wrapAsync(listingController.createListing));

//search listings
router.get("/search",wrapAsync(listingController.showSearchListings));

//New route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//Show listings by category
router.get("/category/:category",wrapAsync(listingController.showListingsCategory));

//Show route
//Update route
//Delete route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(isLoggedIn,isOwner,ValidateListing,upload.single("listing[image]"),wrapAsync(listingController.updateListing))
  .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editForm));

module.exports=router;