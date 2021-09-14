const Sequelize = require('sequelize')

const sequelize = new Sequelize('njleg_db', 'root', 'password', { host: '127.0.0.1', dialect: 'mysql', operatorAliases: false })

module.exports = sequelize