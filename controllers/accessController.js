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
    res.json({'status':result.status,'username':result.username,'password':result.password});
  }
  else{
    res.json({status:null});
  }
}

async function register(req, res) {
  const { username, password, email, phone, address } = req.body
  try {
    const result = await accessService.register(username, password, email, phone, address,'customer')    
    res.json({'status':result.status,'username':result.username,'password':result.password});
  }
  catch (e) { 
    res.json({status:null});
  }    
}

module.exports = {
  login,
  getLoginForm,
  register,
  getRegisterForm,
  profile,
  isLoggedIn
}