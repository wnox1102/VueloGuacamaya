const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Ruta = sequelize.define("Ruta", {
    origen: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destino: {
    type: Sequelize.STRING,
    allowNull: false,
  },
    id_ruta:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
    }

},  {
    timestamps: false,
    freezeTableName: true
  }
);

Ruta.sync();


module.exports = Ruta;