const ImageRouter = require('express').Router();
const ImagineController = require("../../controllers/ImagineController");

ImageRouter.get('/view/:id', ImagineController.view);

module.exports = ImageRouter;