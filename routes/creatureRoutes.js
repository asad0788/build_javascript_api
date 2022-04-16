const express= require('express');

const router= express.Router();

const creatureController= require('../controller/creatureController');

const joiSchemaValidation= require('../midleware/joiSchemaValidation');
const creatureSchema= require('../apiSchema/creatueSchema');

router.post('/', joiSchemaValidation.validateBody(creatureSchema.creatCreatureSchema), creatureController.createCreature);

router.get('/', creatureController.getallCreature);

router.put('/:id', creatureController.updateCreature);
router.delete('/:id' ,creatureController.deleteCreature);
module.exports= router;