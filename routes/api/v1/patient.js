const express = require("express");
const router = express.Router();
const passport  = require('passport');

const patientApi =  require('../../../controllers/api/v1/patients');

router.post('/create-patient',passport.authenticate('jwt',{session:false}),patientApi.create_patient);
router.post('/:id/create-report',passport.authenticate('jwt',{session:false}),patientApi.create_report);
router.get('/:id/all-reports',passport.authenticate('jwt',{session:false}),patientApi.all_reports);








module.exports = router;
