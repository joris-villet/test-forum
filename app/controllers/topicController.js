const Topic = require('../models/Topic');

const topicController = {

   //READ ALL
   getAllTopic: async (req, res, next) => {
      try {
         // const topics = await Topic.findAll();
         const topics = await Topic.findAll({
            order: [
               ['createdAt', 'DESC'],
            ]
         });
         res.json(topics);
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   },

   // READ ONE
   getOneTopic: async (req, res, next) => {
      try {
         const topicId = req.params.id
         const topic = await Topic.findByPk(topicId);
         res.json(topic);
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   },

   // CREATE
   createTopic: async (req, res, next) => {
      try {
         const newTopic = await Topic.create(req.body);
         res.json(newTopic);
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   },

   // UPDATE
   updateTopic: async (req, res, next) => {
      try {
         const topicId = req.params.id;
         const targetTopic = await Topic.findByPk(topicId);

         if(!targetTopic) return next();

         const topicUpdated = targetTopic.update(req.body.message);
         res.json(topicUpdated);
      } 
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   },

   deleteTopic: async (req, res, next) => {
      try {
         const topicId = req.params.id;
         const targetTopic = await Topic.findByPk(topicId);

         if(!targetTopic) return next();

         await targetTopic.destroy();
         res.json("topic supprimé");
      }
      catch (error) {
         console.log(error);
         res.status(500).json(error);
      }
   }

   // DELETE

}


module.exports = topicController;