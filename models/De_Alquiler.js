const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Avion_de_Alquiler = sequelize.define("Avion_de_Alquiler", {
  proveedor: {
    type: Sequelize.STRING,
    allowNull: false,
        validate:{
            notEmpty:false,
        }
  },
  tarifa: {
    type: Sequelize.INTEGER,
    allowNull: false,
        validate:{
            isNumeric:true,
            notEmpty:false,
        }
  },

},  {
    timestamps: false,
    freezeTableName: true
  }
);

Avion_de_Alquiler.sync();


module.exports = Avion_de_Alquiler;