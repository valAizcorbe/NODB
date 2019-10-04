const recipes = [{ id: 0, Title: 'Mac n Cheese', Ingredients: ['Cheese', 'Milk', 'Maccoroni', 'butter'], Steps: ['Lalalala'] }];

module.exports = {
    showRecipe(req, res) {
        res.status(200).send(recipes);
    },

    addRecipe(req, res) {
        const { addOn } = req.body;
        recipes.push(addOn);
        res.status(200).send(recipes);
    },
    editRecipe(req, res) {
        const { index, newRecipe } = req.body;
        recipes[index] = newRecipe;
        res.status(200).send(recipes)
    },
    deleteRecipe(req, res) {
        const { index } = req.params;
        recipes.splice(index, 1);
        res.status(200).send(recipes)
    }
}