const express = require('express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.get('/api/recipe', ctrl.showRecipe);

app.post('/api/recipe', ctrl.addRecipe);

app.put('/api/recipe', ctrl.editRecipe);

app.delete('/api/recipe/:index', ctrl.deleteRecipe);

const port = 5555;
app.listen(port, () => {
    console.log(`Ole ole ole ${port}`)
})