const router = require('express').Router()
const {Ingredient} = require('../db/models')
module.exports = router
const {Op} = require('sequelize')

// const checkIfAdmin = (req, res, next) => {
//   if (req.user === undefined || req.user.accountType !== 'Admin') {
//     const error = new Error('illegal action')
//     error.status = 401
//     return next(error)
//   }
//   next()
// }

router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll()
    res.json(ingredients)
  } catch (err) {
    next(err)
  }
})

router.get('/:name', async (req, res, next) => {
  let searchTerm = req.params.name.toLowerCase()
  try {
    const ingredient = await Ingredient.findOne({
      where: {
        name: {
          [Op.substring]: searchTerm
        }
      }
    })
    res.json(ingredient)
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

router.post('/', async (req, res, next) => {
  try {
    const newIngredient = await Ingredient.create(req.body)
    if (newIngredient) res.json(newIngredient)
    else res.sendStatus(500)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Ingredient.destroy({
      where: {
        id: req.params.id
      }
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const anIngredient = await Ingredient.findByPk(req.params.id)
    if (anIngredient) {
      await anIngredient.update(req.body)
      res.json(anIngredient)
    } else res.sendStatus(404)
  } catch (err) {
    next(err)
  }
})
