const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "nodejstutorial-395016.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { app, auth };
