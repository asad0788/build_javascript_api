const mongoose = require("mongoose");

module.exports= async () => {
  try{
  await mongoose.connect("mongodb://127.0.0.1/my_database", {useNewUrlParser:true})
  console.log(" connected");
  }catch(error){
    console.log("error not connected, ", error);
    throw new Error(error);
  }
   
}

let Creature = require('./creature');
module.exports.Creature=Creature;


