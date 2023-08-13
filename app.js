'use strict';

console.log("Starting app.js");

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const { notFoundHandler, errorHandler } = require('./src/middleware/errorHandlers');
const setupSession = require('./src/config/sessionConfig');
const { accessSecretVersion } = require('./src/config/secretManager');
const setupStaticFiles = require('./src/config/staticConfig');

const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'production') {
    process.env.GCLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;
} else {
    require('dotenv').config();
    process.env.GCLOUD_PROJECT = process.env.LOCAL_PROJECT_ID;
}

async function initApp() {
    const app = express();

    // Setting up the session
    const sessionSecret = NODE_ENV === 'production' ? await accessSecretVersion() : 'local-secret-key';
    setupSession(app, sessionSecret);

    // Middleware for parsing JSON and urlencoded form data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Setup for static files
    setupStaticFiles(app);

    // Express layouts configuration
    app.use(expressLayouts);
    app.set('layout', 'layouts/layout');

    // View engine setup
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '/src/views'));

    // Routes configuration
    require("./src/routes")(app);

    // Error handlers
    app.use(notFoundHandler);
    app.use(errorHandler);

    // Start the server
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });

    return app;
}

initApp().then(app => {
    module.exports = app;
}).catch(error => {
    console.error("Failed to initialize the app:", error);
});
