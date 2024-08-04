const express = require("express");
const router = express.Router();

const loginController  = require("../controllers/login");
const pagesController = require('../controllers/pagesController');


router.get("/", pagesController.showMainPage);
router.get("/store", pagesController.showStorePage);
router.get("/contact", pagesController.showContactPage);

router.get("/cart", pagesController.showCartPage);

router.get('/profile', loginController.isLoggedIn, loginController.profile);
// router.get('/profile', loginController.isLoggedIn, pagesController.showMainPage);

router.get("/register", loginController.registerForm);
router.get("/login", loginController.loginForm);
router.get('/logout',loginController.logout);

router.post("/register", loginController.register);
router.post("/login", loginController.login);

module.exports = router;
