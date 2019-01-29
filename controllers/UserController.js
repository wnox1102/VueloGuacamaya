const sequelize = require('sequelize');
const db = require('../config/database.js');
const Users = require('../models/User.js');

const controller = {};

controller.getUser = async function (callback) {
    try {
        let response = await Users.findAll();
        let user = response.map(result => result.dataValues);
        console.log(user);
        callback(user, null);
    } catch (error) {
        callback(null, error);
    }
}


controller.createUser = async function (data) {
        console.log(data.name, data.email, data.password);
        Users.create(data).then(Users=>{
            res.render('Home',{title: 'home'})
        });
        // code goes here
    
}

controller.deleteUser = async function (id, callback) {
    try {
        let response = await Users.destroy( {
            where: {
                id
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
}

module.exports = controller;
