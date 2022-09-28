import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipe) {
        await this.getConnection().insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            date: recipe.getDate(),
            author_id: recipe.getAuthorId(),
        }).into("cookenu_receitas")
    }

    public async getRecipeById(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from('cookenu_receitas')
            .where({id: id})

        return result[0]
    }
}