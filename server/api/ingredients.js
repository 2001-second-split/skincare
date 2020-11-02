const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll()
    res.json(ingredients)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id)
    res.json(ingredient)
  } catch (err) {
    next(err)
  }
})
