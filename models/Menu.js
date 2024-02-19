const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');
const { db, DataTypes, Model } = require('../db.js');

// TODO - create a Menu model
class Menu extends Model {};

Menu.init({
    title: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'Menu'
});

module.exports = {Menu};