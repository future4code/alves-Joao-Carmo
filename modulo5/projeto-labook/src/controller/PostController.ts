import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { ICreatePostInputDTO } from "../models/Post";


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

}