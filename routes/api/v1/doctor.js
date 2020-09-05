const express = require("express");
const router = express.Router();
const doctorApi = require('../../../controllers/api/v1/doctors');


router.post('/create-doctor',doctorApi.create_doctor);

module.exports = router;
