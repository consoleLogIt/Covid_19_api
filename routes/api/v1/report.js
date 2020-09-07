const express = require("express");
const router = express.Router();
const passport  = require('passport');


const reportApi = require('../../../controllers/api/v1/reports');

router.get('/:status',passport.authenticate('jwt',{session:false}),reportApi.status);


module.exports = router;
