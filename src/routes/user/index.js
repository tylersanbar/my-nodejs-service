const UserRouter = require("express").Router();
const UserController = require("../../controllers/UserController");

// Display the login form
UserRouter.get('/login', UserController.viewLogin);
// Handle the login form submission
UserRouter.post('/login', UserController.login);

// User creation route
UserRouter.get('/signup', UserController.viewSignup);
// User creation route
UserRouter.post('/signup', UserController.signup);

// User logout route
UserRouter.get('/logout', UserController.viewLogout);

// User profile route
UserRouter.get('/profile', UserController.viewProfile);

// User settings route
UserRouter.get('/settings', UserController.viewSettings);

// Your default route for the user
UserRouter.get('/', (req, res) => {
    res.send('user');
});

module.exports = UserRouter;
