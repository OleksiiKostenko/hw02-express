const handelMongooseError = (e, data, next) => {
  e.status = 400;
  next();
};

module.exports = handelMongooseError;
