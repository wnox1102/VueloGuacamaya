const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const md5 = require("md5");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

/*
User.encrypt = function ({ password }) {
  const salt = bcrypt.genSaltSync(process.env.SALT);
  return bcrypt.hashSync(password, salt);
};
*/

module.exports = User;
