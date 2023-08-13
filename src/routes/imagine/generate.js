const GenerateRouter = require('express').Router();
const ImagineController = require("../../controllers/ImagineController");
GenerateRouter.post('/', ImagineController.generate);

module.exports = GenerateRouter;