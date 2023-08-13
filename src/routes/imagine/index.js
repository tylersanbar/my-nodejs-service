const ImagineRouter = require("express").Router();
const ImagineController = require("../../controllers/ImagineController");
const path = require('path');

ImagineRouter.use('/generate', require('./generate.js')) // Path: src\routes\imagine\generate.js
ImagineRouter.use('/image', require('./image.js')) // Path: src\routes\imagine\image.js

ImagineRouter.get('/', ImagineController.index);

module.exports = ImagineRouter;