const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBX4z0CNGB31cBj3_lKZi9GKBZL-N_zngA",
    authDomain: "nodejstutorial-395016.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { app, auth };
