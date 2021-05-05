const Sequelize = require('sequelize');

const client = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false//passer a true pour voir les différentes requêtes effectuées par l'ORM
});

try {
  client.authenticate();
  console.log('Connection Postgres OK.');
} catch (error) {
  console.error('Impossible de se connecter à Postgres:', error);
}

module.exports = client;