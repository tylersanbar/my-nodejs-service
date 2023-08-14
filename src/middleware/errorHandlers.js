const { ValidationError, AuthenticationError, NotFoundError } = require('../utils/customErrors');

// Centralized Error Handler
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof ValidationError) {
        return res.status(err.statusCode).send(err.message);
    }

    if (err instanceof AuthenticationError) {
        return res.status(err.statusCode).send(err.message);
    }

    if (err instanceof NotFoundError) {
        return res.status(err.statusCode).send(err.message);
    }

    // Handle other custom error types, defaulting to a 500 server error
    res.status(err.statusCode || 500).send(err.message || 'Something broke!');
};

module.exports = {
    errorHandler
};
