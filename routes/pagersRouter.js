const express = require("express");
const router = express.Router();
const pagesController = require('../controllers/pagesController');


router.route('/')
    .get(pagesController.showMainPage);
router.route('/store')
    .get(pagesController.showStorePage);
router.route('/contact')
    .get(pagesController.showContactPage);
    
router.route('/cart')
    .get(pagesController.showCartPage);


module.exports = router;
