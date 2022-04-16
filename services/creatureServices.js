const Creature= require('../creature');
const { formatMongoData, checkObjectId } = require('../helper/helper');

module.exports.createCreatureService= async (servicedata)=>{
    try{
        let newCreature= new Creature({...servicedata});
         let result= await newCreature.save();
        return formatMongoData(result); 
    }catch(error){
        console.log("Error is happen", error);
        throw new Error(error);

    }
   

}


module.exports.getallCreature= async ()=>{
    try{
        let newCreature= await Creature.find({});
         
        return  formatMongoData(newCreature);
    }catch(error){
        console.log("Error is happen", error);
        throw new Error(error);

    }
   

}


module.exports.deleteCreature= async ({ id })=>{
    try{
        checkObjectId(id);
        let newCreature= await Creature.findByIdAndDelete(id);
        if(!newCreature){
            throw new Error("Creature not found");
            
        }
         
        return  formatMongoData(newCreature);
    }catch(error){
        console.log("Error is happen", error);
        throw new Error(error);

    }
   

}

module.exports.updateProduct = async ({ id, updateInfo }) => {
   
       try {
      checkObjectId(id);
      let product = await Creature.findOneAndUpdate(
        { _id: id },
        updateInfo,
        { new: true }
      )
      if (!product) {
        throw new Error("Product Not found");
      }
      return formatMongoData(product);
    } catch (error) {
      console.log('Something went wrong: Service: updateProduct', error);
      throw new Error(error);
    }
  }