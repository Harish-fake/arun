const User = require('../models/user');

exports.register = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send('User registered');
};

exports.login = async (req, res) => {
    const user = await User.findOne(req.body);
    if (user) res.json(user);
    else res.status(400).send('Invalid credentials');
};
