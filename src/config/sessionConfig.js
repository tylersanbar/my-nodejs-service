const session = require('express-session');

function setupSession(app, sessionSecret) {
    app.use(session({
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true
    }));

    app.use((req, res, next) => {
        res.locals.loggedIn = req.session.loggedIn || false; // Default to false if not set
        next();
    });
}

module.exports = setupSession;
