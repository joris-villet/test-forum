const Sequelize = require('sequelize');

const client = new Sequelize('forum_dev', 'postgres', 'js4life', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false//passer a true pour voir les différentes requêtes effectuées par l'ORM
});

try {
  client.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = client;