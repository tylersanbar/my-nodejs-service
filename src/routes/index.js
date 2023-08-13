const HomeController = require('../controllers/HomeController');

module.exports = function(app) {
  app.get('/', HomeController.index);
    app.use('/imagine', require('./imagine'));
    app.use('/user', require('./user'));
}