// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')


const authController = {

   
   loginPost: async (req, res) => {
   
      
      try {
         const { email, password } = req.body;
      
         const targetUser = await User.findAll({
            where: {
               email: email
            }
         });
   
         if(targetUser.length === 0){
            return res.status(500).json("email ou mot de passe incorrect")
         }
   
         if(email === targetUser[0].email){
   
            const targetPassword = await bcrypt.compareSync(password, targetUser[0].password)
         
            if(!targetPassword){
               return res.status(500).json("email ou mot de passe incorrect")
            }
            else {
               req.session.admin;
               console.log(req.session)
               console.log(req.session.admin)
               return res.json(req.session)
               // ici les tokens
               // pour générer une clé secrète on peut utiliser le module crypto directement dans le terminal avec node -i
               // crypto.randomBytes(64).toString('hex')
            }
         } 
      }
      catch (err) {
         console.error(err);
         res.status(500).json(err);
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

module.exports = authController;