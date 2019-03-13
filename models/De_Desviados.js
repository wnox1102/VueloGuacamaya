const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Avion_Desviados= sequelize.define("Avion_Desviados", {
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

Avion_Desviados.sync();


module.exports = Avion_Desviados;