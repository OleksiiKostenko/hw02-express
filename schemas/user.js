const Joi = require('joi');

const userRegisterSchema = Joi.object({
  subscription: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});
const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = { userRegisterSchema, userLoginSchema, emailSchema };
