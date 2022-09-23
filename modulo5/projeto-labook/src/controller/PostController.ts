import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { ICreatePostInputDTO, IGetAllPostsInputDTO } from "../models/Post";


export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
            const input: ICreatePostInputDTO = {
                token: req.headers.authorization as string,
                content: req.body.content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPosts = async (req: Request, res: Response) => {
        try {
            const input: IGetAllPostsInputDTO = {
                token: req.headers.authorization as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.postBusiness.getAllPosts(input)

            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

}