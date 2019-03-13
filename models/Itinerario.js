const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Itinerario = sequelize.define("Itinerario", {
  fecha_salida: {
    type: Sequelize.STRING,
    allowNull: false,
        validate:{
            isDate:true,
        }
  },
  fecha_llegada: {
    type: Sequelize.STRING,
    allowNull: false,
        validate:{
            isDate:true,
        }
  },
},  {
    timestamps: false,
    freezeTableName: true
  }
);

Itinerario.sync();


module.exports = Itinerario;