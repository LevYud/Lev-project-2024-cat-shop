const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
  console.log(req.session);
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
}

function profile(req, res) {  
  console.log(profile);
  res.render("profilePage", {username: req.session.username})
}

function loginForm(req, res) { res.render("login", {}) }

function registerForm(req, res) { res.render("register", {}) }

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  console.log('login')
  const { username, password } = req.body
  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    // res.redirect('/profile')
    console.log('good')
  }
  else
    console.log('error')
    // res.redirect('/login?error=1')
}

async function register(req, res) {
  const { username, password } = req.body
  try {
    await loginService.register(username, password)    
    req.session.username = username
    res.redirect('/profile')
  }
  catch (e) { 
    res.redirect('/register?error=1')
  }    
}

module.exports = {
  login,
  loginForm,
  register,
  registerForm,
  logout,
  profile,
  isLoggedIn
}