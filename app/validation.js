const Joi = require('joi');

const userSchema = Joi.object({
   firstname: Joi.string().min(3).max(20).required().messages({
      "string.empty": "Le champs prénom est vide",
      "string.min": "Le prénom doit avoir au minimum 3 caractères",
      "string.max": "Le prénom ne doit pas dépasser 20 caractères"
   }),
   lastname: Joi.string().min(3).max(20).required().messages({
      "string.empty": "Le champs nom est vide",
      "string.min": "Le nom doit avoir au minimum 3 caractères",
      "string.max": "Le nom ne doit pas dépasser 20 caractères"
   }),
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io']}}).required().messages({
      "string.empty": "Le champs email est vide",
      "string.email": "Ce n'est pas un email valide"
   }),
   password: Joi.string().min(8).required().messages({
      "string.min": "Le mot de passe doit avoir au minimum 3 caractères",
      "string.empty": "Le champs mot de passe est vide",
      "any.only": "Le mot de passe n'est pas identique"
   }),
   repeatPassword: Joi.string().min(8).required().messages({
      "string.min": "Le mot de passe doit avoir au minimum 3 caractères",
      "string.empty": "Le champs mot de passe est vide",
      "any.only": "Le mot de passe n'est pas identique"
   }),
   repeatPassword: Joi.ref('password')
});

const loginSchema = Joi.object({
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr', 'io']}}).required().messages({
      "string.email": "Ce n'est pas un email valide"
   }),
   password: Joi.string().min(8).required().messages({
      "string.min": "Le mot de passe doit avoir au minimum 8 caractères",
   }),
})

module.exports = {
   userSchema,
   loginSchema
}





