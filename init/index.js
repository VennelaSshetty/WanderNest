if(process.env.NODE_ENV!="production"){
  require('dotenv').config({ path: '../.env' })
}

const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const dbUrl=process.env.ATLASDB_URL;

main()
   .then(res => console.log("Connection successful"))
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB=async()=>{
   await Listing.deleteMany({});
   let allListings=initData.data.map((obj)=>({...obj,owner:"68482d4d399d644697ed0017"}));
   await Listing.insertMany( allListings);
   console.log("Data initialised");
};

initDB();