const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Empleado = sequelize.define("Empleado", {
  id_empleado:{
    type:Sequelize.INTEGER,
    allowNull:false,
    primaryKey:true
  },
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

Empleado.sync();


module.exports = Empleado;