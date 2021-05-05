
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// middleware auth jwt
const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;
    console.log("je suis dans le requireAuth")

    // If token doesn't exists
    if (!token) {
        res.status(500).json("token does not exists");
    } 
    else {
        jwt.verify(token, 'the secret sentence', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(500).json("token inconnu")
            }
            else {
                console.log(decodedToken);
                res.status(200).json("token décodé")
            }
        });
    }
}

// Check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {

        jwt.verify(token, 'the secret sentence', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                next();
            }
            else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id)
                res.json(user)
                next();
            }
        });
    }
    else {
        res.json("no token");
        next();
    }
}

module.exports = { requireAuth, checkUser };

