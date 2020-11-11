const Sequelize = require('sequelize')
const db = require('../db')

const Ingredient = db.define('ingredient', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  bestTime: {
    type: Sequelize.ENUM('morning', 'night', 'any time'),
    defaultValue: 'any time'
  },
  searchCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Ingredient
