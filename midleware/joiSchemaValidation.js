const Joi= require('joi');

const constants= require('../constants/constants');
const validateObjectSchema= (data, schema) =>{
    const result = schema.validate(data);
 
  if (result.error) {
    const errorDetails = result.error.details.map(value => {
      return {
        error: value.message,
        path: value.path
      };
    });
    console.log(errorDetails);
    return errorDetails;
  }
  return null;
  

}

module.exports.validateBody=(schema)=>{
    
    return (req , res, next) =>  {
        let response= {...constants.defaultServerResponse};
      var error=  validateObjectSchema(req.body, schema );
      if(error){
          response.body=error;
          response.message="invalid fields";
          return res.status(response.status).send(response);
      
      }
      return next();

    };
}