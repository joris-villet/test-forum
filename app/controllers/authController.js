// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')


const authController = {

   loginPost: async (req, res) => {
   
      try {
         const { email, password } = req.body;

         console.log("email => ", email)
         console.log("password => ", password)
      
         const dbUser = await User.findAll({
            where: {
               email: email
            }
         });
   
         if (dbUser.length === 0) {
            res.status(500).json("email ou mot de passe incorrect");
            return;
         }
   
         console.log("contrôle d'email OK")
         console.log("password => ", dbUser[0].password)
   
         // const targetPassword = await bcrypt.compareSync(password, dbUser[0].password)
         bcrypt.compare(password, dbUser[0].password, (err) => {
            if (err) {
               res.json("email ou mot de passe incorrect");
            }
            else {
               req.session.admin;
               console.log(req.session.admin)
               res.status(200).json(req.session.admin);
               // ici les tokens
               // pour générer une clé secrète on peut utiliser le module crypto directement dans le terminal avec node -i
               // crypto.randomBytes(64).toString('hex')
            }
         });
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