const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ModeloAvion = require('./ModeloAvion.js');
const Avion = sequelize.define("Avion", {
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_avion:{
      type:Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
  }
},  {
    timestamps: false,
    freezeTableName: true
  }
);
ModeloAvion.hasOne(Avion);
Avion.belongsTo(ModeloAvion);
Avion.sync();
module.exports = Avion;