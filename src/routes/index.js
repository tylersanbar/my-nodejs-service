const path = require('path');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('home', { 
        pageTitle: 'Home',
        //loggedIn: req.session.loggedIn || false,  // Assuming session management with 'req.session'
        loggedIn: false,
        viewCss: '/css/home.css' 
    });
});
    app.use('/imagine', require('./imagine'));
    app.use('/test', require('./test'));
    app.use('/api', require('./api'));
    app.use('/user', require('./user'));
}