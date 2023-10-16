const userModel = require("../models/users")
const jwt = require('jsonwebtoken')
// const bcrypt = require("bcryptjs");

const auth = {
    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await userModel.findOne({ username: username, password: password })
            res.json(
                {
                    token: jwt.sign(
                        { username: user.username, _id: user._id },
                        process.env.ACCESS_SECRET,
                        { expiresIn: '1h' }
                    )
                }
            );
        } catch (err) {
            res.json(err.message);
        }
    }
}

module.exports = auth;