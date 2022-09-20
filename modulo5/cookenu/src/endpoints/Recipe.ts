import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { InvalidId } from "../error/InvalidId";
import { MissingFields } from "../error/MissingFields";
import Recipe from "../model/Recipe";
import Authenticator from "../services/Authenticator";
import GenerateDate from "../services/GenerateDate";
import GenerateId from "../services/GenerateId";


class RecipeEndpoint {

    public async createRecipe(req: Request, res: Response): Promise<void> {
        try {

            const token = req.headers.authorization!
            if (!token) {
                throw new InvalidCredencial()
            }

            const { title, description } = req.body
            if (!title || !description) {
                throw new MissingFields()
            }

            const recipeDB = new RecipeDatabase()

            const id = new GenerateId().createId()
            const date = new GenerateDate().createDate()
            const author_id = new Authenticator().verifyToken(token)

            const recipe = new Recipe(id, title, description, date, author_id)
            await recipeDB.createRecipe(recipe)

            res.status(201).send({ message: 'Receita criada com sucesso.' })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async getRecipe(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization!
            if (!token) {
                throw new InvalidCredencial()
            }

            const author_id = new Authenticator().verifyToken(token)
            if (!author_id) {
                throw new InvalidCredencial()

            }

            const id = req.params.id as string
            if (!id) {
                throw new MissingFields()
            }

            const recipeDB = new RecipeDatabase()
            const recipe = await recipeDB.getRecipeById(id)
            if (!recipe) {
                throw new InvalidId()
            }

            res.status(200).send({
                id: id,
                title: recipe.title,
                description: recipe.description,
                createdAt: recipe.date.toLocaleDateString(),
            })


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

}

export default RecipeEndpoint