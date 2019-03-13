const sequelize = require('sequelize');
const db = require('../config/database.js');
const Empleado = require('../models/Empleado.js');

const controller = {};

controller.getEmpleado= async function (callback){
    try {
        let response = await Empleado.findAll({ 
        });
        let empleado = response.map(result => result.dataValues);
        callback(empleado, null);
    } catch (error) {
        callback(null,error);
        
    }
};

controller.deleteEmpleado = async function (id,callback){
    try {
        let response = await Empleado.destroy({
            where: id
        });
        callback(null);
    } catch (error) {
        callback(err);
    }
};

controller.createEmpleado = async function (data){
    Empleado.create(data);
};

controller.UpdateEmpleado = async function (id,callback){
    try {
        let response = await Empleado.findOne(
            {name,lastname,cargo}= req.body
            ,{
            where: 
                id
        });
        callback(Empleado);
        
    } catch (error) {
        callback(error)
    }

}


module.exports = controller;