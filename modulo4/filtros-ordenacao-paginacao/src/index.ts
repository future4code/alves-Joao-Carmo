import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUsersByName } from "./endpoints/getUsersByName";

app.get("/recipes", getAllRecipes)
app.get("/user", getUsersByName)