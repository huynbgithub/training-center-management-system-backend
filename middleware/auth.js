const jwt = require("jsonwebtoken");

exports.loginCheck = (req, res, next) => {
    try {
        let token = req.headers.token;
        token = token.replace("Bearer ", "");
        decode = jwt.verify(token, process.env.ACCESS_SECRET);
        req.userDetails = decode;
        next();
    } catch (err) {
        res.json({
            error: "You must be logged in",
        });
    }
};