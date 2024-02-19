const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');

// TODO - connect to db via sequelize
const db =  new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
});

module.exports = { db, DataTypes, Model };
