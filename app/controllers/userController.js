// Require la db si l'on souhaiute passer des requêtes brutes
// require('../clientDB');

// MODELS
const User = require('../models/User');

const userSchema = require('../validation');

const bcrypt = require('bcrypt');

const moment = require('moment');
moment.locale('fr');



const userController  = {
   // Read All
   findAll: async (req, res, next) => {

      try {
         const users = await User.findAll()

         /* requête brute d'une view crée (voir migrations/deploy/views.sql) */
         //const users = await User.sequelize.query('SELECT * FROM v_user_with_french_date');
         date = User.currentDate
         res.json({
            users,
            date
         })
      }
      catch(error) {
         console.trace(error);
         res.status(500).send(error);
      }
   },

   // Read One
   findOne: async (req, res, next) => {
      try {
         const userId = req.params.id;
         const user = await User.findByPk(userId);
         if(req.session.admin) {
            console.log(req.session)
            console.log("Bienvenue " + user.firstname)
         }
         res.json(user);
      }
      catch (error){
         console.trace(error);
         res.status(500).send(error);
      }
   },


   // Create
   create: async (req, res, next) => {
      try {

         await userSchema.validateAsync(req.body)

         req.body.password = bcrypt.hashSync(req.body.password, 10);

         const newUser = await User.create(req.body);

         res.json(newUser.fullName);
      }
      catch(error) {
         console.log(error.details[0].message);
         res.status(500).json(error.details[0].message);
      }
   },

   // Update
   update: async (req, res, next) => {

      try {
         const userId = req.params.id;
         const rightUser = await User.findByPk(userId);

         if(!!rightUser){
            await rightUser.update(req.body)
            res.json("utilisateur modifié" + newUser);
         }
         else {
            next();
         }
      }
      catch (error) {
         console.trace(error);
         res.status(500).send(error);
      }
   },

   // Delete
   delete: async (req, res, next) => {

      try {
         const userId = req.params.id;

         const rightUser = await User.findByPk(userId);

         if(!!rightUser){
            await rightUser.destroy();
            res.send("utilisateur supprimé")
         }
         else {
            next();
         }
      }
      catch (error) {
         console.trace(error);
         res.status(500).send(error);
      }
   }
}

 module.exports = userController;