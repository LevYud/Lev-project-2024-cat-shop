const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.route('/loginCheck')
    .post(userController.loginCheck);

router.route('/register')
    .post(userController.register);

module.exports = router;