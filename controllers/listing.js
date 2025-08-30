const Listing=require("../models/listing.js");

module.exports.index=async (req,res)=>{
  let allListings=await Listing.find({});
  res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
   res.render("listings/new.ejs");
};

module.exports.showListing=async(req,res)=>{
  let {id}=req.params;
  const listing=await Listing.findById(id)
      .populate({
        path:"reviews",
        populate:{
          path:"author"
        },
      })
      .populate("owner");
  
  if(!listing){
    req.flash("error","Listing you requested for does not exist");
    res.redirect("/listings");
  }else{
    res.render("listings/show.ejs",{listing});
  }
};

module.exports.createListing=async (req,res)=>{
  let newListing=new Listing(req.body.listing);
  let url=req.file.path;
  let filename=req.file.filename;
  newListing.owner=req.user._id;
  newListing.image={url,filename};
  await newListing.save();

 req.flash("success","New listing created!");
 res.redirect("/listings");
};

module.exports.editForm=async (req,res)=>{
  let {id}=req.params;
  const listing=await Listing.findById(id);
   if(!listing){
    req.flash("error","Listing you requested for does not exist");
    res.redirect("/listings");
  }else{
    let originalUrl=listing.image.url;
    originalUrl=originalUrl.replace("/upload","/upload/h_250,w_250");
    res.render("listings/edit.ejs",{listing,originalUrl});
  }
};

module.exports.updateListing=async(req,res)=>{
  let {id}=req.params;
  let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});

  if(typeof req.file != "undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
   
    await listing.save();
  }
    
  await listing.save();
  
  req.flash("success","Listing Updated successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing=async (req,res)=>{
  let {id}=req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing deleted successfully");
  res.redirect("/listings");
};

module.exports.showListingsCategory=async(req,res)=>{
  let {category}=req.params;
  allListings=await Listing.find({category:category});
  res.render("listings/index.ejs",allListings);
};

module.exports.showSearchListings=async(req,res)=>{
  let searchRes=req.query.q;
  allListings=await Listing.find({$or:[{title:{ $regex:searchRes ,$options:"i"}},
                                      {location:{ $regex:searchRes ,$options:"i"}},
                                      {country:{ $regex:searchRes ,$options:"i"}},
                                    ]});
  if(allListings.length==0){
    req.flash("error",`No listings found with ${searchRes}`);
    return res.redirect("/listings");
  }
  res.render("listings/index.ejs",allListings);
}

