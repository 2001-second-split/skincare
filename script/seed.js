'use strict'

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
    }),
    Ingredient.create({
      id: 5,
      name: 'biotin',
      description:
        'Im baby portland umami 8-bit quinoa venmo succulents la croix fingerstache. Franzen unicorn fingerstache wayfarers la croix portland seitan salvia PBR&B ennui tattooed wolf cornhole post-ironic. ',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 6,
      name: 'calcium ascorbate',
      description:
        'Lomo fanny pack gochujang, master cleanse small batch put a bird on it man bun beard scenester letterpress ethical pitchfork microdosing iceland drinking vinegar. Bushwick vegan chambray stumptown art party.',
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 7,
      name: 'alpha-tocopherol',
      description:
        'Seitan ramps activated charcoal poutine edison bulb gentrify flannel williamsburg af.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 8,
      name: 'pyridoxine hydrochloride (HCL)',
      description: 'Af plaid selfies fam narwhal pitchfork subway tile.',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 9,
      name: 'vitamin D',
      description:
        'Ramps flexitarian messenger bag venmo cloud bread waistcoat coloring book pinterest drinking vinegar brooklyn air plant kale chips pitchfork.',
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 10,
      name: 'vitamin E',
      description:
        'Pok pok readymade plaid, roof party selvage pop-up chillwave bitters meggings try-hard shaman mixtape beard pour-over.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 11,
      name: 'vitamin F',
      description:
        'Activated charcoal ennui bushwick, bicycle rights kickstarter cred keffiyeh af vinyl banh mi gluten-free selfies blog woke.',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 12,
      name: 'vitamin H',
      description:
        'Literally crucifix iPhone hell of snackwave kitsch. DIY subway tile kombucha, gluten-free succulents chillwave put a bird on it pork belly selfies.',
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 13,
      name: 'vitamin K',
      description:
        'Selvage vice post-ironic lyft lumbersexual yr bespoke pinterest salvia stumptown.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 14,
      name: 'choline',
      description:
        'Gochujang put a bird on it yr chambray four dollar toast banh mi, bushwick brunch asymmetrical trust fund slow-carb green juice. Farm-to-table jean shorts freegan, stumptown authentic typewriter kickstarter snackwave.',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 15,
      name: 'algae',
      description:
        'Jean shorts polaroid leggings, marfa copper mug gastropub kale chips selvage taxidermy bitters tumblr seitan mixtape iPhone. Tattooed put a bird on it messenger bag direct trade ethical ramps hammock ennui poutine cold-pressed kale chips polaroid gluten-free. ',
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 16,
      name: 'acai',
      description:
        'Microdosing viral pabst cred lumbersexual kitsch, celiac skateboard chia sartorial cliche tofu. Cold-pressed coloring book pok pok unicorn.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 17,
      name: 'durian',
      description:
        'Four loko franzen blue bottle listicle VHS poke slow-carb chambray authentic subway tile mlkshk photo booth twee keffiyeh before they sold out.',
      bestTime: 'morning'
    }),
    Ingredient.create({
      id: 18,
      name: 'folic acid',
      description:
        'Iceland actually trust fund aesthetic yuccie schlitz four dollar toast enamel pin selfies hell of food truck hella williamsburg fingerstache pork belly.',
      bestTime: 'night'
    }),
    Ingredient.create({
      id: 19,
      name: 'hibiscus',
      description:
        'Tattooed cardigan neutra DIY PBR&B chambray photo booth pug subway tile. Pork belly gochujang live-edge cloud bread irony keytar deep v franzen selvage art party raw denim health goth asymmetrical fam banjo.',
      bestTime: 'any time'
    }),
    Ingredient.create({
      id: 20,
      name: 'Malva sylvestris extract',
      description:
        'Cornhole listicle succulents, keffiyeh glossier ramps irony next level leggings. Four loko succulents wayfarers kinfolk readymade wolf master cleanse austin mlkshk try-hard farm-to-table raw denim.',
      bestTime: 'morning'
    })
  ])

  const interactions = await Promise.all([
    Interactions.create({IngredientId: 1, InteractingIngredientId: 2}),
    Interactions.create({IngredientId: 2, InteractingIngredientId: 1}),
    Interactions.create({IngredientId: 2, InteractingIngredientId: 3}),
    Interactions.create({IngredientId: 2, InteractingIngredientId: 20}),
    Interactions.create({IngredientId: 3, InteractingIngredientId: 2}),
    Interactions.create({IngredientId: 20, InteractingIngredientId: 2}),
    Interactions.create({IngredientId: 10, InteractingIngredientId: 11}),
    Interactions.create({IngredientId: 10, InteractingIngredientId: 12}),
    Interactions.create({IngredientId: 10, InteractingIngredientId: 13}),
    Interactions.create({IngredientId: 11, InteractingIngredientId: 10}),
    Interactions.create({IngredientId: 12, InteractingIngredientId: 10}),
    Interactions.create({IngredientId: 13, InteractingIngredientId: 10}),
    Interactions.create({IngredientId: 15, InteractingIngredientId: 10}),
    Interactions.create({IngredientId: 16, InteractingIngredientId: 17}),
    Interactions.create({IngredientId: 17, InteractingIngredientId: 16}),
    Interactions.create({IngredientId: 17, InteractingIngredientId: 18}),
    Interactions.create({IngredientId: 18, InteractingIngredientId: 17}),
    Interactions.create({IngredientId: 18, InteractingIngredientId: 19}),
    Interactions.create({IngredientId: 19, InteractingIngredientId: 18})
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
