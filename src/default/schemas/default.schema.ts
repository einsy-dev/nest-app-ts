import * as Joi from 'joi';

export const Schema = Joi.object().keys({
  title: Joi.string().min(2).required(),
  description: Joi.string().min(5),
  author: Joi.string(),
  price: Joi.number(),
});
