const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Pasaje = sequelize.define("Pasaje", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cedula: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true,
  },
  cargo:{
      type: Sequelize.STRING,
      allowNull: false,

  }

},  {
    timestamps: false,
    freezeTableName: true
  }
);

Pasaje.sync();


module.exports = Pasaje;