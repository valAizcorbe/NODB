const recipes = [
  {
    title: "Mac n Cheese",
    ingredients: ["Cheese", "Milk", "Macaroni", "Butter"],
    steps: [
      "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. Drain. Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper until smooth, about 5 minutes. Slowly pour milk into butter-flour mixture while continuously stirring until mixture is smooth and bubbling, about 5 minutes. Add Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes. Fold macaroni into cheese sauce until coated."
    ],
    id: 1
  },
  {
    title: "Strawberry Spinach Salad",
    ingredients: [
      "Spinach",
      "Strawberry",
      "Vinegar",
      "Onion",
      "Worcestershire sauce"
    ],
    steps: [
      "In a medium bowl, whisk together the sesame seeds, poppy seeds, sugar, olive oil, vinegar, paprika, Worcestershire sauce and onion. Cover, and chill for one hour. In a large bowl, combine the spinach, strawberries and almonds. Pour dressing over salad, and toss. Refrigerate 10 to 15 minutes before serving."
    ],
    id: 2
  },
  {
    title: "Flan",
    ingredients: ["Sugar", "Milk", "Eggs", "Vanilla"],
    steps: [
      "Preheat oven to 350 degrees F (175 degrees C). In a medium saucepan over medium-low heat, melt sugar until liquefied and golden in color. Carefully pour hot syrup into a 9 inch round glass baking dish, turning the dish to evenly coat the bottom and sides. Set aside. In a large bowl, beat eggs. Beat in condensed milk, evaporated milk and vanilla until smooth. Pour egg mixture into baking dish. Cover with aluminum foil. Bake in preheated oven 60 minutes. Let cool completely. To serve, carefully invert on serving plate with edges when completely cool."
    ],
    id: 3
  },
  {
    title: "Scramble Eggs",
    ingredients: ["Eggs", "Milk", "Salt and Pepper", "Butter"],
    steps: [
      "BEAT eggs, milk, salt and pepper in medium bowl until blended. HEAT butter in large nonstick skillet over medium heat until hot. POUR IN egg mixture. As eggs begin to set, GENTLY PULL the eggs across the pan with a spatula, forming large soft curds. CONTINUE cooking – pulling, lifting and folding eggs – until thickened and no visible liquid egg remains. Do not stir constantly. REMOVE from heat. SERVE immediately."
    ],
    id: 4
  }
];

let id = 5;

module.exports = {
  showRecipe(req, res) {
    res.status(200).send(recipes);
  },

  addRecipe(req, res) {
    const { addOn } = req.body;
    recipes.push({ ...addOn, id: id });
    id++;
    res.status(200).send(recipes);
  },
  editRecipe(req, res) {
    // console.log(req.body);
    const { id, newRecipe } = req.body;
    // console.log(typeof id);

    let recipeIndex = recipes.findIndex(recipe => recipe.id === +id);
    recipes[recipeIndex] = { ...newRecipe, id: id };

    // console.log(recipes);
    res.status(200).send(recipes);
  },
  deleteRecipe(req, res) {
    const { index } = req.params;
    recipes.splice(index, 1);
    res.status(200).send(recipes);
  }
};
