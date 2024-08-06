const express = require('express');
const router = express.Router();
const accessController = require('../controllers/accessController.js');

router.route('/login')
    .get(accessController.getLoginForm)
    .post(accessController.login);

router.route('/register')
    .get(accessController.getRegisterForm)
    .post(accessController.register);

module.exports = router;