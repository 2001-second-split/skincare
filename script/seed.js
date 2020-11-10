'use strict'

// const { in } = require('sequelize/types/lib/operators')
const db = require('../server/db')
const {User, Ingredient, Interactions} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const ingredients = await Promise.all([
    Ingredient.create({
      id: 1,
      name: 'retinol',
      description:
        "While retinol is often used as a catchall term for topical products containing a vitamin A derivative, it's technically a type of retinoid, of which there are several variations that work at different levels. Retinoids work by increasing collagen production as well as increasing the rate of skin cell turnover. They also help treat acne, blackheads, and clogged pores by reducing the stickiness of the cells that clog pores, as well as speeding up the rate at which the skin turns over and regenerates. Because of this, they are ideal for improving your skin's overall texture, minimizing fine lines and wrinkles, evening out skin tone, and decreasing pore size.",
      // vitamin C, benzoyl peroxide, AHA, BHA
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 2,
      name: 'vitamin C',
      description:
        'With antioxidant and anti-aging benefits, vitamin C leaves skin with a brighter, more radiant appearance. It can also result in a reduction of the appearance of fine lines, wrinkles, and hyperpigmentation for a more even skin tone',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 3,
      name: 'benzoyl peroxide',
      description:
        'Benzoyl Peroxide is a peroxide with antibacterial, irritant, keratolytic, comedolytic, and anti-inflammatory activity. Upon topical application, benzoyl peroxide decomposes to release oxygen which is lethal to the bacteria Proprionibacterium acnes.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 4,
      name: 'niacinamide',
      description:
        'Also known as vitamin B3 and nicotinamide, niacinamide is a water-soluble vitamin that works with the natural substances in your skin to help visibly minimize enlarged pores, tighten lax pores, improve uneven skin tone, soften fine lines and wrinkles, diminish dullness, and strengthen a weakened surface. Niacinamide also reduces the impact of environmental damage because of its ability to improve skin’s barrier (its first line of defense), plus it also plays a role in helping skin to repair signs of past damage.',
      bestTime: 'any time'
    })
  ])

  // ingredients.setInteractions(1, 2)

  const interactions = await Promise.all([
    Interactions.create({IngredientId: 1, InteractingIngredientId: 2}),
    Interactions.create({IngredientId: 2, InteractingIngredientId: 1})
  ])

  console.log(`seeded ${ingredients.length} ingredients`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${interactions.length} interactions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
