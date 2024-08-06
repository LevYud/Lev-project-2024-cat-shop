const User = require("../models/User");

async function loginCheck(username, password) {
    const user = await User.findOne({ _id: username, password });
    return user;
}

async function register(username, password, email, phone, address, status) {

    const user = new User({
        _id: username,
        password, email, phone, address, status
    });

    await user.save();
    return user;        
}

module.exports = { loginCheck, register }