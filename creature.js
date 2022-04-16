
const mongoose = require('mongoose'),

 Schema = mongoose.Schema;


let creatureSchema = new Schema({
  author: String,
  title: String,
  name:String,
  age:String,
    
  },{
    timestamps:true,
    toObject: {
      transform:
      function(doc, ret, options){
        ret.id=ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;


    }}
  }

  );


let Creature= mongoose.model("Creature", creatureSchema);
var result=Creature.find();
// console.log(result);

module.exports =  Creature;

