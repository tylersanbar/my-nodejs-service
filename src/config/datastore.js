require('dotenv').config();

const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore();

module.exports = datastore;
