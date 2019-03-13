const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Avion = require('./Avion.js');

const ModeloAvion = sequelize.define("ModeloAvion", {
  cant_banos: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cant_salidas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
        isNumeric:true,
        notEmpty:false,
    }
  },
  id_modelo: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey:true,
  },
  tipo_combustible:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
          notEmpty:false,
      }

  },
  cant_max_asientos:{
      type: Sequelize.INTEGER,
      allowNull:false,
      validate:{
          isNumeric:true,
          notEmpty:false,

      }
  },
  fabricante:{
      type:Sequelize.STRING, 
      allowNull:false,

  },
  velocidad_max:{
      type: Sequelize.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true
      }

  }, 
  velocidad_crucero:{
      type:Sequelize.INTEGER,
      allowNull:false,
      validate:{
          isNumeric:true
      }
  }, 
  peso_vacio:{
      type:Sequelize.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true
      }
  },
  peso_max:{
      type: Sequelize.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true,

      }
  }, 
  equipo_medico:{
      type:Sequelize.TINYINT,
      allowNull:false

  }, 
  distancia_despegue_cargaMax:{
      type:Sequelize.INTEGER,
      allowNull:false,
      validate:{
        isNumeric:true
      }
  },
  acomodaciones:{
      type:Sequelize.STRING,
      allowNull:false,

    }

},    {
    timestamps: false,
    freezeTableName: true
  }
);


ModeloAvion.sync();

module.exports = ModeloAvion;