const sequelize = require('sequelize');
const db = require('../config/database.js');
const Avion = require('../models/Avion.js');

const controller = {};

controller.getAvion= async function (callback){
    try {
        let response = await Avion.findAll({ 
        });
        let avion = response.map(result => result.dataValues);
        callback(avion, null);
    } catch (error) {
        callback(null,error);
        
    }
};


module.exports = controller;