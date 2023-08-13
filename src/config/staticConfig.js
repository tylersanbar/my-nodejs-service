// staticConfig.js

const path = require('path');
const express = require('express');

// const htmlRoutes = {
//   '/imagine': '/html/imagine.html',
//   '/example': '/html/example.html',
//   '/test': '/html/test.html',
//   // ... more routes
// };

function setupGeneralStaticFiles(app) {
  app.use(express.static(path.join(__dirname, '../../public')));
}

// function setupHtmlRoutes(app) {
//   Object.keys(htmlRoutes).forEach(route => {
//     app.use(route, express.static(path.join(__dirname, '../../public', htmlRoutes[route])));
//   });
// }

module.exports = function(app) {
  setupGeneralStaticFiles(app);
  //setupHtmlRoutes(app);
};
