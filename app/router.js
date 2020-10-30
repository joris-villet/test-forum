const express = require('express');
const router = express.Router();


const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const topicController = require('./controllers/topicController');



router.route('/user')
   .get(userController.findAll)
   .post(userController.create)

router.route('/user/:id')
   .get(userController.findOne)
   .put(userController.update)
   .delete(userController.delete)

router.route('/topic')
   .get(topicController.getAllTopic)
   .post(topicController.createTopic)

router.route('/topic/:id')
   .get(topicController.getOneTopic)
   .put(topicController.updateTopic)
   .delete(topicController.deleteTopic)   

router.use(mainController.notFound);


module.exports = router;




