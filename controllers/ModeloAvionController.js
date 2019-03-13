const sequelize = require('sequelize');
const db = require('../config/database.js');
const ModeloAvion = require('../models/ModeloAvion.js');

const controller = {};

controller.getModeloAvion= async function (callback){
    try {
        let response = await ModeloAvion.findAll({ 
        });
        let modeloa = response.map(result => result.dataValues);
        callback(modeloa, null);
    } catch (error) {
        callback(null,error);
        
    }
};



module.exports = controller;