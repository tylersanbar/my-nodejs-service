const ImagineRouter = require("express").Router();
const ImagineController = require("../../controllers/ImagineController");

function isAuthenticated(req, res, next) {
    // Check if user is authenticated
    // This is a simplistic check and should be replaced with your actual authentication logic
    if (req.session.loggedIn) {
        return next();
    } else {
        // Redirect to login page or send a 401 Unauthorized response
        res.redirect('/user/login');
    }
}

ImagineRouter.use(isAuthenticated)
ImagineRouter.use('/generate', require('./generate.js')) // Path: src\routes\imagine\generate.js
ImagineRouter.use('/image', require('./image.js')) // Path: src\routes\imagine\image.js

ImagineRouter.get('/', ImagineController.index);

module.exports = ImagineRouter;