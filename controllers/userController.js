const userService = require("../services/userService")

async function loginCheck(req, res) {
  const { username, password } = req.body;
  const result = await userService.loginCheck(username, password);
  if (result) {
    res.json({'status':result.status,'username':result._id,'password':result.password});
  }
  else{
    res.json({status:null});
  }
}

async function register(req, res) {
  const { username, password, email, phone, address } = req.body
  try {
    const result = await userService.register(username, password, email, phone, address,'customer')    
    res.json({'status':result.status,'username':result._id,'password':result.password});
  }
  catch (e) { 
    res.json({status:null});
  }    
}

module.exports = {
  loginCheck,
  register
}