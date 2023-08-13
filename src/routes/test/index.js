const TestRouter = require("express").Router();
const TestController = require("../../controllers/TestController");

TestRouter.get('/', TestController.index);
TestRouter.get('/testText', TestController.renderTestTextPage);
TestRouter.post('/testTextSubmit', TestController.submitSaveText);

module.exports = TestRouter;