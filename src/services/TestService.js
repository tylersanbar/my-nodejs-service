const TestRepository = require('../repositories/TestRepository');
exports.saveText = function (text) {
    TestRepository.saveText(text);
}