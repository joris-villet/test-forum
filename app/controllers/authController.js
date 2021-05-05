const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const { loginSchema } = require('../validation');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
   return jwt.sign({ id }, 'the secret sentence', {
       expiresIn: maxAge,
   });
}

const authController = {

   loginPost: async (req, res) => {

      try {
         await loginSchema.validateAsync(req.body);

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
       
         bcrypt.compare(password, dbUser[0].password, (err, response) => {
            if (!response) {
               res.status(500).json("email ou mot de passe incorrect");
            }
            else {
               console.log("je suis dans le else là ou je build le cookie")
               
               const token = createToken(dbUser[0].id)

               res.cookie('jwt', token, {
                  httpOnly: true,
                  maxAge: maxAge * 1000
               });

               res.status(200).json("cookie signed");
               // ici les tokens
               // pour générer une clé secrète on peut utiliser le module crypto directement dans le terminal avec node -i
               // crypto.randomBytes(64).toString('hex')
            }
         });
      }
      catch (err) {
         console.log("Erreur => ", err);
         res.status(500).json(err.details[0].message);
      }
      
   },
   
   logout: async (req, res, next) => {
      try {
         res.cookie('user', ' ', { maxAge: 1});
         res.json(true)
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

}

module.exports = authController;