const Joi = require('joi');

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': `missing  required name field`,
    'string.empty': `missing field`,
  }),
  email: Joi.string().required().messages({
    'any.required': `missing  required email field`,
    'string.empty': `missing field`,
  }),
  phone: Joi.string().required().messages({
    'any.required': `missing  required phone field`,
    'string.empty': `missing field`,
  }),
  favorite: Joi.boolean(),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': `missing field favorite`,
  }),
});
module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
};
