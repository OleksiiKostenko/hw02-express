const handelMongooseError = (e, data, next) => {
  const { code, name } = e;

  e.status = code === 11000 && name === 'MongoServerError' ? 405 : 400;
  next();
};

module.exports = handelMongooseError;
