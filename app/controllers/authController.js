const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')

module.exports = {

   signup_get: (req, res) => {
      res.json('signup');
   },
   
   login_get: (req, res) => {
      res.json('login');
   },
   
   signup_post: async (req, res) => {
      const { email, password } = req.body;
   
      try {
         const user = await User.create({ email, password })
         res.status(201).json(user);
      }
      catch (error) {
         console.log(error);
         res.status(400).send("erreur, user not created");
      }
   },
   
   login_post: async (req, res) => {
   
      try {
         const { email, password } = req.body;
      
         const targetUser = await User.findAll({
            where: {
               email: email
            }
         });
   
         if(targetUser.length === 0){
            return res.status(500).json("email non enregistré")
         }
   
         if(email === targetUser[0].email){
   
            const targetPassword = await bcrypt.compareSync(password, targetUser[0].password)
         
            if(!targetPassword){
               return res.status(500).json("password incorrect")
            }
            else {
               req.session.admin = email;
               console.log(req.session)
               console.log(req.session.admin)
               return res.json("password correct")
               // ici les tokens
               // pour générer une clé secrète on peut utiliser le module crypto directement dans le terminal avec node -i
               // crypto.randomBytes(64).toString('hex')
            }
         } 
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
      
   },
   
   logout: async (req, res) => {
      try {
         req.session.admin = req.session.destroy;
         console.log(req.session);
         res.json(req.session)
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

}

