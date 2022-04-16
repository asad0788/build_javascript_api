const creatureServics= require('../services/creatureServices');
const constant= require('../constants/constants');


module.exports.createCreature= async(req, res)=>{
    let response={...constant.defaultServerResponse};
    try{

     const responseFromServices=  await creatureServics.createCreatureService(req.body);
     response.status=200;
     response.message=constant.productMessages.CREATURE_CREATED;
     response.body=responseFromServices;
        }catch(error){
      console.log("Error happen in Creating Creature", error);
      response.status=400;
      response.message="Creature Created  Not Sucessfully";
      response.body={};
      throw new Error(error);
    }
    return res.status(response.status).send(response);
  


}

module.exports.updateCreature = async (req, res) => {
  let response = { ...constant.defaultServerResponse };
  try {
    const responseFromService = await creatureServics.updateProduct({
      id: req.params.id,
      updateInfo: req.body
    });
    response.status = 200;
    response.message = "Product updated Sucessfully";
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: updateProduct', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}
  

module.exports.deleteCreature = async(req, res)=>{
  let response={...constant.defaultServerResponse};
  try{

   const responseFromServices=  await creatureServics.deleteCreature(req.params);
   response.status=200;
   response.message=constant.productMessages.CREATURE_DELEATED;
   response.body=responseFromServices;
      }catch(error){
    console.log("Error happen in deleting Creature", error);
    response.status=400;
    response.message="Creature delted  Not Sucessfully";
    response.body={};
    throw new Error(error);
  }
  return res.status(response.status).send(response);



}

module.exports.getallCreature= async(req, res)=>{
    let response={...constant.defaultServerResponse};
    try{

     const responseFromServices=  await creatureServics.getallCreature();
     response.status=200;
     response.message=constant.productMessages.CREATURE_FETECHED;
     response.body=responseFromServices;
        }catch(error){
      console.log("Error happen in Creating Creature", error);
      response.status=400;
      response.message="Creature Created  Not Sucessfully";
      response.body={};
      throw new Error(error);
    }
    return res.status(response.status).send(response);
  


}