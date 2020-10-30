const { Model, DataTypes } = require('sequelize');
const clientDB = require('../clientDB');

const moment = require('moment');
moment.locale('fr');  

class User extends Model {

  static get currentDate(){
    return moment().format("dddd Do MMMM YYYY HH:mm")
  }

}


User.init({
  firstname:{
    type: DataTypes.TEXT,
  },
  lastname:{
    type: DataTypes.TEXT,
  },
  email:{
    type: DataTypes.TEXT
  },
  password:{
    type: DataTypes.TEXT
  },
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return "Bienvenue " + this.firstname + ' ' + this.lastname;
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    get() {
      const date = this.getDataValue('createdAt');
      return moment(date).format('dddd Do MMMM YYYY HH:mm');
    }
  },
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      const date = this.getDataValue('updatedAt');
      return moment(date).format('dddd Do MMMM YYYY HH:mm');
    }
  },
}, {
  sequelize: clientDB,
  tableName: "api_user",
  underscored: true
});


module.exports = User;