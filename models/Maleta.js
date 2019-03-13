const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Maleta = sequelize.define("Maleta", {
  id_Maleta: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey:true,
  },
  peso: {
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

Maleta.sync();


module.exports = Maleta;