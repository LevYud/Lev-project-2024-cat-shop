const express = require('express');
const router = express.Router();
const accessController = require('../controllers/accessController.js');

router.route('/login')
    .post(accessController.login);

router.route('/register')
    .post(accessController.register);

module.exports = router;