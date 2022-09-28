import app from "./app";
import UserEndpoint from "./endpoints/User"
import RecipeEndpoint from "./endpoints/Recipe";
const user = new UserEndpoint()
const recipe = new RecipeEndpoint()

app.post('/signup', user.signUp)
app.post('/login', user.login)
app.post('/recipe', recipe.createRecipe)
app.get('/user/profile', user.getUser)
app.get('/user/:id', user.getOtherUser)
app.get('/recipe/:id', recipe.getRecipe)