const express = require("express");
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/nhan-li-xi',userController.luckyMoney)

module.exports = router;