const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Vuelo = sequelize.define("Vuelo", {
  origen: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destino: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fecha_ida: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true,
  },
  fecha_origen:{
      type: Sequelize.STRING,
      allowNull: false,

  }, 
  

},  {
    timestamps: false,
    freezeTableName: true
  }
);

//Vuelo.sync();


module.exports = Vuelo;