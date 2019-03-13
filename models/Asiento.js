const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Asiento = sequelize.define("Asiento", {
  numero_asiento: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey:true,
  },
  clase: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
        isAlpha:true,
        notEmpty:true,
        
    }
  }

},  {
    timestamps: false,
    freezeTableName: true
  }
);

Asiento.sync();


module.exports = Asiento;