const clientDB = require('../clientDB');
const { Model, DataTypes } = require('sequelize');

const moment = require('moment');
moment.locale('fr');


class Topic extends Model {}

Topic.init({
   title: {
      type: DataTypes.TEXT
   },
   message: {
      type: DataTypes.TEXT
   },
   createdAt: {
      type: DataTypes.DATE,
      get() {
        const date = this.getDataValue('createdAt');
        return moment(date).format('dddd Do MMMM YYYY HH:mm');
      }
    },
}, {
   sequelize: clientDB,
   tableName: "api_topic",
   underscored: true
});

module.exports = Topic;