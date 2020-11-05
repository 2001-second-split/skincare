const User = require('./user')
const Ingredient = require('./ingredients')
const Interactions = require('./interactions')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Ingredient.hasMany(Ingredient, {as: 'Interactions'})
// Interactions.belongsToMany(Ingredient)

Ingredient.belongsToMany(Ingredient, {
  through: Interactions,
  as: 'Ingredient1',
  foreignKey: 'IngredientId',
  otherKey: 'InteractingIngredientId'
})

Ingredient.belongsToMany(Ingredient, {
  through: Interactions,
  as: 'Ingredient2',
  foreignKey: 'InteractingIngredientId',
  otherKey: 'IngredientId'
})

module.exports = {
  User,
  Ingredient,
  Interactions
}
