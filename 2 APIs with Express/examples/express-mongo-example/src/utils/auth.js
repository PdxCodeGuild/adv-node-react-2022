const jwtMiddleware = require('express-jwt');
const { compose } = require('compose-middleware');

const { JWT_SECRET } = require('./secrets');

const handleAuthError = (err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    return res.status(401).send({error: err.message});
  }

  next();
};

const jwtAuth = compose([
  jwtMiddleware({ secret: JWT_SECRET }),
  handleAuthError,
]);

module.exports = {
  handleAuthError,
  jwtAuth,
};