const express = require('express')
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await Recipes.getRecipeById(req.params.recipe_id)
        if (!recipe) {
            next({
                status: 404,
                message: 'recipe not found'
            })
        }
        else {
            res.json(recipe)
        }
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
