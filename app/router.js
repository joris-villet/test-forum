const express = require('express');
const router = express.Router();
const authRouter = express.Router();
const { checkUser, requireAuth } = require('./middleware/authMiddleware')

const userController = require('./controllers/userController');
const topicController = require('./controllers/topicController');
const authController = require('./controllers/authController');

// router.get('*', checkUser);

router.route('/api/user')
   .get(userController.findAll)
   .post(userController.create)

router.route('/api/user/:id')
   .get(userController.findOne)
   .put(userController.update)
   .delete(userController.delete)

router.get('/api/topic', topicController.getAllTopic)
router.post('/api/topic', topicController.createTopic)

router.route('/api/topic/:id')
   .get(topicController.getOneTopic)
   .put(topicController.updateTopic)
   .delete(topicController.deleteTopic) 
   
authRouter.post('/api/login', authController.loginPost);
authRouter.get('/api/logout', authController.logout);
authRouter.get('/api/auth-require', requireAuth);

module.exports = {
   router,
   authRouter
}




