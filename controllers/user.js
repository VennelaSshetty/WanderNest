const User=require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("user/signup.ejs");
};

module.exports.signup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({username,email});
        let registeredUser=await User.register(newUser,password);
        //console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                next(err);
            }
             req.flash("success","Welcome to Wanderlust");
             res.redirect("/listings");
        })
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/listings");
    }
};

module.exports.renderLoginForm=(req,res)=>{
    res.render("user/login.ejs");
};

module.exports.login=(req,res)=>{
    req.flash("success","You logged in successfully!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if((err)=>{
            next(err);
        });
        req.flash("success","You logged out");
        res.redirect("/listings");
    });
};