const { HttpError } = require('../helpers');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  const { SECRET_KEY } = process.env;
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer' && !token) {
    next(HttpError(401, 'Not authorized'));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401, 'Not authorized'));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, 'Not authorized'));
  }
};

module.exports = authenticate;
