const UserModel = require('../models/UserModel');
const { auth } = require('../config/authentication');
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth');
const { ValidationError } = require('../utils/customErrors');

exports.viewLogin = function(req, res) {
    res.render('login', {
        pageTitle: 'Login', 
        viewCss: '/css/login-form.css'
    });
};

exports.viewLogout = function(req, res) {
    req.session.loggedIn = false;
    res.render('logout', {
        pageTitle: 'Logout',
        //viewCss: '/css/logout.css'
    });
}

exports.viewProfile = function(req, res) {
    res.render('profile', {
        pageTitle: 'Profile',
        //viewCss: '/css/profile.css'
    });
}

exports.viewSettings = function(req, res) {
    res.render('settings', {
        pageTitle: 'Settings',
        viewCss: '/css/settings.css'
    });
}

exports.viewSignup = function(req, res) {
    res.render('signup', {
        pageTitle: 'Sign Up',
        viewCss: '/css/signup-form.css'
    });
};

exports.login = async function(req, res, next) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
        req.session.loggedIn = true;
        // Redirect to the referring page or the homepage
        res.redirect(req.get('Referrer') || '/');
    } catch (error) {
        console.error("Error in login:", error);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            next(new ValidationError('Invalid email or password'));
        } else {
            next(error);
        }
    }
}

exports.signup = async function(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        console.log("Created Firebase user with UID:", firebaseUser.uid);

        const user = await UserModel.create({
            firebase_uid: firebaseUser.uid,
        });

        if (!user) {
            await firebaseUser.delete();
            throw new Error('Failed to create local user entry.');
        }

        res.render('signupSuccess', {pageTitle: 'Sign Up Success', viewCss: '/css/signup-form.css'});
    } catch (error) {
        console.error("Error in signup:", error);
        if (error.code === 'auth/email-already-in-use') {
            next(new ValidationError('Email already in use'));
        } else {
            next(error);
        }
    }
}
