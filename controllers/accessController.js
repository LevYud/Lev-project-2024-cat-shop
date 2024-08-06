const accessService = require("../services/access")

function isLoggedIn(req, res, next) {
  console.log("isLoggedIn");
  // if (req.session.username != null)
  //   return next()
  // else
  //   res.redirect('/login')
}

function profile(req, res) {  
  console.log("profile");
  // res.render("profilePage", {username: req.session.username})
}

function getLoginForm(req, res) {
  console.log("getLoginForm");
  //  res.render("login", {}) 
}

function getRegisterForm(req, res) {
  console.log("getRegisterForm");
  //  res.render("register", {}) 
}

async function login(req, res) {
  const { username, password } = req.body;
  const result = await accessService.login(username, password);
  if (result) {
    res.json({'status':"customer",'username':username,'password':password});
  }
  else{
    res.json({status:null});
  }
}

async function register(req, res) {
  console.log("register");
  // const { username, password } = req.body
  // try {
  //   await accessService.register(username, password)    
  //   req.session.username = username
  //   res.redirect('/profile')
  // }
  // catch (e) { 
  //   res.redirect('/register?error=1')
  // }    
}

module.exports = {
  login,
  getLoginForm,
  register,
  getRegisterForm,
  logout,
  profile,
  isLoggedIn
}