const express = require("express");
const EarlyAccessAPI = require("../../../controllers/early_access_api");
const router = express.Router();

//PRICE API

// API
// GET Price
//API Working
router.post("/newsletter", EarlyAccessAPI.Newsletter);

module.exports = router;
