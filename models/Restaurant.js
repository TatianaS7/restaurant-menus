const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');
const { db, DataTypes, Model } = require('../db.js');

// TODO - create a Restaurant model
class Restaurant extends Model {};

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    cuisine: DataTypes.STRING
}, {
    sequelize: db,
    modelName: "Restaurant"
});

module.exports = {Restaurant};