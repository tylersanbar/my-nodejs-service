// staticConfig.js

const path = require('path');
const express = require('express');

const htmlRoutes = {

 };

function setupGeneralStaticFiles(app) {
  app.use(express.static(path.join(__dirname, '../../public')));
}

function setupHtmlRoutes(app) {
  Object.keys(htmlRoutes).forEach(route => {
    app.use(route, express.static(path.join(__dirname, '../../public', htmlRoutes[route])));
  });
}

module.exports = function(app) {
  setupGeneralStaticFiles(app);
  setupHtmlRoutes(app);
};
