const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Cuidad= sequelize.define("Cuidad", {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
        isAlpha:true,
        notEmpty:true,
    }
  },
  pais: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
        isAlpha:true,
        notEmpty:false,
    }
  },
 

},  {
    timestamps: false,
    freezeTableName: true
  }
);

Cuidad.sync();


module.exports = Cuidad;