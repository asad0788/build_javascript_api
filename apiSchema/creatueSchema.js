const Joi = require('@hapi/joi');

module.exports.creatCreatureSchema= Joi.object().keys({
    author:Joi.string().required(),
    title:Joi.string().required(),
    name:Joi.string().required(),
    age:Joi.number().required()

});