const TestService = require('../services/TestService');

exports.index = function(req, res) {
    res.render('test', { pageTitle: 'Test' });
};

exports.submitSaveText = function(req, res) {
    const text = req.body.text;
    console.log("Saving text:", text);
    TestService.saveText(text);
};

exports.renderTestTextPage = function(req, res) {
    res.render('testText');
};
